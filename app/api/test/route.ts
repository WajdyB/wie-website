import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Test the connection by trying to fetch events
    const { data, error } = await supabase
      .from('events')
      .select('count')
      .limit(1)

    if (error) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Database connection failed',
          error: error.message 
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Supabase connection successful',
      data: data
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 