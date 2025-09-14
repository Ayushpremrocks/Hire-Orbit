import { NextResponse } from 'next/server';

// Temporarily disable all authentication middleware
// This allows deployment without any API keys or external services
// Uncomment the Clerk setup below when you're ready to add authentication

/*
import { clerkMiddleware } from '@clerk/nextjs/server';

const publicRoutes = ['/', '/sign-in(.*)', '/sign-up(.*)'];

const hasClerkEnv = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
);

const handler = hasClerkEnv
  ? clerkMiddleware({ publicRoutes })
  : (req) => NextResponse.next();

export default handler;
*/

// Simple passthrough middleware - no authentication required
export default function middleware(request) {
  return NextResponse.next();
}

// Middleware matcher configuration
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
