# Troubleshooting Guide

## Common Issues and Solutions

### 1. "supabaseUrl is required" Error

**Problem**: The Supabase URL is not being loaded from environment variables.

**Solutions**:
1. **Restart the development server**:
   ```bash
   # Stop the current server (Ctrl+C)
   # Then restart
   npm run dev
   ```

2. **Verify environment variables**:
   - Check that `.env.local` exists in the project root
   - Ensure variables are properly formatted:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. **Test the connection**:
   - Visit `http://localhost:3000/api/test` to test Supabase connection
   - Should return: `{"success":true,"message":"Supabase connection successful"}`

### 2. Database Connection Issues

**Problem**: API endpoints return 500 errors.

**Solutions**:
1. **Check Supabase project**:
   - Verify your project is active in Supabase dashboard
   - Check if tables exist: `events`, `committee_members`, `admin_users`

2. **Run the SQL script**:
   - Go to Supabase SQL Editor
   - Run the contents of `scripts/create-tables.sql`

3. **Check RLS policies**:
   - Ensure Row Level Security allows read/write operations
   - For testing, you can temporarily disable RLS

### 3. Admin Login Issues

**Problem**: Cannot login to admin panel.

**Solutions**:
1. **Check environment variables**:
   ```env
   ADMIN_EMAIL=admin@wie-isimm.org
   ADMIN_PASSWORD=admin123
   ```

2. **Test login API**:
   - Use browser dev tools or Postman to test:
   ```bash
   POST http://localhost:3000/api/auth/login
   Content-Type: application/json
   
   {
     "email": "admin@wie-isimm.org",
     "password": "admin123"
   }
   ```

### 4. Events Not Loading

**Problem**: Events page shows "No Events Found".

**Solutions**:
1. **Check database**:
   - Verify events exist in Supabase dashboard
   - Check if API returns data: `GET http://localhost:3000/api/events`

2. **Add test events**:
   - Login to admin panel (`/admin`)
   - Create a test event
   - Check if it appears on `/events`

### 5. Environment Variables Not Loading

**Problem**: Environment variables are undefined.

**Solutions**:
1. **File location**: Ensure `.env.local` is in the project root (same level as `package.json`)

2. **File format**: No spaces around `=`, no quotes needed:
   ```env
   # Correct
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   
   # Incorrect
   NEXT_PUBLIC_SUPABASE_URL = "https://your-project.supabase.co"
   ```

3. **Restart server**: Environment variables require server restart

### 6. API Endpoints Not Working

**Problem**: API routes return 404 or 500 errors.

**Solutions**:
1. **Check file structure**:
   ```
   app/
   ├── api/
   │   ├── auth/
   │   │   └── login/
   │   │       └── route.ts
   │   ├── events/
   │   │   ├── route.ts
   │   │   └── [id]/
   │   │       └── route.ts
   │   └── test/
   │       └── route.ts
   ```

2. **Verify imports**: Check that all imports are correct in API files

3. **Check console**: Look for TypeScript compilation errors

## Testing Checklist

Before reporting issues, verify:

- [ ] Development server is running (`npm run dev`)
- [ ] `.env.local` file exists with correct values
- [ ] Supabase project is active
- [ ] Database tables are created
- [ ] Test endpoint works: `http://localhost:3000/api/test`
- [ ] Admin login works: `http://localhost:3000/admin`
- [ ] Events API works: `http://localhost:3000/api/events`

## Debug Mode

Enable debug logging by adding to `.env.local`:
```env
DEBUG=true
```

## Getting Help

If issues persist:
1. Check browser console for errors
2. Check terminal for server errors
3. Verify all environment variables are set
4. Test API endpoints directly
5. Check Supabase dashboard for database issues 