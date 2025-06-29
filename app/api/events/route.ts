import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET all events
export async function GET() {
  try {
    console.log('API: Fetching events from database...')
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false })

    console.log('API: Supabase response - data:', data, 'error:', error)

    if (error) {
      console.error('API: Database error:', error)
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      )
    }

    console.log('API: Returning events:', data)
    return NextResponse.json({ 
      success: true, 
      data 
    })
  } catch (error) {
    console.error('API: Unexpected error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST new event
export async function POST(request: NextRequest) {
  try {
    const eventData = await request.json()

    // Validate required fields
    if (!eventData.title || !eventData.description || !eventData.date || !eventData.location) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('events')
      .insert([{
        title: eventData.title,
        description: eventData.description,
        date: eventData.date,
        location: eventData.location,
        attendees: eventData.attendees || 0,
        images: eventData.images || []
      }])
      .select()

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: data[0],
      message: 'Event created successfully' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
} 