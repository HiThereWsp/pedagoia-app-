import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/', '/auth', '/pricing', '/contact'];

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth_token');
  const path = request.nextUrl.pathname;
  
  // Allow public routes
  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  // Protect dashboard and tool routes
  if (path.startsWith('/dashboard') || path.includes('/tools/')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }

  // Redirect authenticated users trying to access auth page
  if (path === '/auth' && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};