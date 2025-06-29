import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('files') as File[]
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No files uploaded' },
        { status: 400 }
      )
    }

    // Ensure the events directory exists
    const eventsDir = join(process.cwd(), 'public', 'images', 'events')
    if (!existsSync(eventsDir)) {
      await mkdir(eventsDir, { recursive: true })
    }

    const uploadedFiles: string[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        return NextResponse.json(
          { success: false, message: 'Only image files are allowed' },
          { status: 400 }
        )
      }

      // Generate unique filename with .webp extension for better compression
      const timestamp = Date.now()
      const randomString = Math.random().toString(36).substring(2, 15)
      const filename = `event-${timestamp}-${randomString}.webp`
      
      // Convert file to buffer
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      // Save file to public/images/events
      const filepath = join(eventsDir, filename)
      await writeFile(filepath, buffer)
      
      // Add to uploaded files array
      uploadedFiles.push(`/images/events/${filename}`)
    }

    return NextResponse.json({
      success: true,
      message: 'Files uploaded successfully',
      files: uploadedFiles
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { success: false, message: 'Upload failed' },
      { status: 500 }
    )
  }
} 