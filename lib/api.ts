// API service functions for admin operations

export interface LoginCredentials {
  email: string
  password: string
}

export interface EventData {
  title: string
  description: string
  date: string
  location: string
  attendees?: number
  images?: string[]
}

// Authentication
export async function loginAdmin(credentials: LoginCredentials) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  return response.json()
}

// Image Upload
export async function uploadImages(files: File[]) {
  const formData = new FormData()
  
  files.forEach((file) => {
    formData.append('files', file)
  })

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  return response.json()
}

// Events API
export async function getEvents() {
  console.log('getEvents function called')
  const response = await fetch('/api/events')
  console.log('Raw response:', response)
  const data = await response.json()
  console.log('Parsed data:', data)
  return data
}

export async function createEvent(eventData: EventData) {
  const response = await fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  })

  return response.json()
}

export async function updateEvent(id: number, eventData: EventData) {
  const response = await fetch(`/api/events/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  })

  return response.json()
}

export async function deleteEvent(id: number) {
  const response = await fetch(`/api/events/${id}`, {
    method: 'DELETE',
  })

  return response.json()
} 