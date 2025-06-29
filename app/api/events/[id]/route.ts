import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// PUT update event
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const eventData = await request.json()
    const eventId = params.id

    // Validate required fields
    if (!eventData.title || !eventData.description || !eventData.date || !eventData.location) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('events')
      .update({
        title: eventData.title,
        description: eventData.description,
        date: eventData.date,
        location: eventData.location,
        attendees: eventData.attendees || 0,
        images: eventData.images || [],
        updated_at: new Date().toISOString()
      })
      .eq('id', eventId)
      .select()

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      )
    }

    if (data.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: data[0],
      message: 'Event updated successfully' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE event
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const eventId = params.id

    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', eventId)

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Event deleted successfully' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
} 