import { NextRequest, NextResponse } from 'next/server'
import { uploadImageToStorage } from '@/lib/supabase-storage'

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

    const uploadedFiles: { url: string; path: string }[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        return NextResponse.json(
          { success: false, message: 'Only image files are allowed' },
          { status: 400 }
        )
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024 // 10MB
      if (file.size > maxSize) {
        return NextResponse.json(
          { success: false, message: 'File size must be less than 10MB' },
          { status: 400 }
        )
      }

      try {
        // Upload to Supabase Storage
        const result = await uploadImageToStorage(file)
        uploadedFiles.push(result)
      } catch (error) {
        console.error('Upload error for file:', file.name, error)
        return NextResponse.json(
          { success: false, message: `Failed to upload ${file.name}` },
          { status: 500 }
        )
      }
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