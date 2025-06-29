import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create a Supabase client with service role key for server-side operations
export const supabaseStorage = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Storage bucket name
export const STORAGE_BUCKET = 'event-images'

// Generate a unique filename
export function generateUniqueFilename(originalName: string): string {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  const extension = originalName.split('.').pop()
  return `event-${timestamp}-${randomString}.${extension}`
}

// Upload image to Supabase Storage
export async function uploadImageToStorage(file: File): Promise<{ url: string; path: string }> {
  try {
    const filename = generateUniqueFilename(file.name)
    const filePath = `${STORAGE_BUCKET}/${filename}`

    const { data, error } = await supabaseStorage.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      throw new Error(`Upload failed: ${error.message}`)
    }

    // Get public URL
    const { data: urlData } = supabaseStorage.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(filePath)

    return {
      url: urlData.publicUrl,
      path: filePath
    }
  } catch (error) {
    console.error('Storage upload error:', error)
    throw error
  }
}

// Delete image from Supabase Storage
export async function deleteImageFromStorage(filePath: string): Promise<void> {
  try {
    const { error } = await supabaseStorage.storage
      .from(STORAGE_BUCKET)
      .remove([filePath])

    if (error) {
      throw new Error(`Delete failed: ${error.message}`)
    }
  } catch (error) {
    console.error('Storage delete error:', error)
    throw error
  }
} 