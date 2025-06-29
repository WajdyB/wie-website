# WIE ISIMM Website - Backend Setup Guide

This guide will help you set up the backend for the WIE ISIMM website with admin authentication and event management.

## 🚀 Quick Start

### 1. Environment Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note down your project URL and anon key

2. **Configure Environment Variables**
   - Copy `.env.local` and update with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ADMIN_EMAIL=admin@wie-isimm.org
   ADMIN_PASSWORD=admin123
   ```

### 2. Database Setup

1. **Run the SQL Script**
   - Go to your Supabase dashboard
   - Navigate to SQL Editor
   - Copy and paste the contents of `scripts/create-tables.sql`
   - Execute the script to create tables and sample data

2. **Verify Tables Created**
   - Check that the following tables exist:
     - `events`
     - `committee_members`
     - `admin_users`

### 3. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 4. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

## 🔧 Features Implemented

### ✅ Admin Authentication
- **Login System**: Email/password authentication
- **Secure Access**: Admin-only dashboard
- **Session Management**: Automatic logout on page refresh

### ✅ Event Management
- **Create Events**: Add new events with title, description, date, location, attendees
- **Edit Events**: Modify existing event details
- **Delete Events**: Remove events from the database
- **Image Upload**: Support for multiple event images (currently using placeholder URLs)

### ✅ Database Integration
- **Real-time Data**: Events page fetches data from database
- **CRUD Operations**: Full Create, Read, Update, Delete functionality
- **Error Handling**: Proper error messages and fallbacks

### ✅ API Endpoints
- `POST /api/auth/login` - Admin authentication
- `GET /api/events` - Fetch all events
- `POST /api/events` - Create new event
- `PUT /api/events/[id]` - Update event
- `DELETE /api/events/[id]` - Delete event

## 🎯 Usage

### Admin Access
1. Navigate to `/admin`
2. Login with credentials:
   - Email: `admin@wie-isimm.org`
   - Password: `admin123`

### Managing Events
1. **View Events**: See all events in the database
2. **Add Event**: Fill out the form and click "Add Event"
3. **Edit Event**: Click the edit button on any event
4. **Delete Event**: Click the delete button (with confirmation)

### Public Events Page
- Navigate to `/events` to see the public events gallery
- Events are automatically loaded from the database
- Lightbox gallery for viewing event images

## 🔒 Security Notes

- **Environment Variables**: Never commit `.env.local` to version control
- **Admin Credentials**: Change default admin password in production
- **Database Permissions**: Configure Supabase RLS (Row Level Security) for production
- **API Rate Limiting**: Consider adding rate limiting for production

## 🚧 Future Enhancements

### Image Upload
Currently using placeholder images. To implement real image upload:

1. **Supabase Storage**: Set up storage buckets
2. **Upload API**: Create image upload endpoints
3. **File Validation**: Add file type and size validation
4. **Image Optimization**: Implement image resizing and compression

### Enhanced Authentication
- **JWT Tokens**: Implement proper session management
- **Password Hashing**: Use bcrypt for password security
- **Multi-factor Authentication**: Add 2FA support

### Additional Features
- **Event Categories**: Add event categorization
- **Search & Filter**: Implement event search functionality
- **Email Notifications**: Send notifications for new events
- **Analytics**: Track event views and engagement

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify Supabase URL and key in `.env.local`
   - Check if tables exist in Supabase dashboard

2. **Admin Login Fails**
   - Ensure environment variables are set correctly
   - Check browser console for API errors

3. **Events Not Loading**
   - Verify API routes are working
   - Check database for existing events
   - Review browser network tab for errors

### Debug Mode
Enable debug logging by adding to `.env.local`:
```env
DEBUG=true
```

## 📞 Support

For issues or questions:
1. Check the browser console for error messages
2. Verify all environment variables are set
3. Ensure database tables are created correctly
4. Test API endpoints directly using tools like Postman

---

**Note**: This is a marketing website with basic admin functionality. For production use, implement additional security measures and proper image upload functionality. 