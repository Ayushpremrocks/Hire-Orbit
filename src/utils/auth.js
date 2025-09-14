// Utility to safely get current user when Clerk is configured
import { currentUser } from "@clerk/nextjs/server";

export async function getCurrentUserSafe() {
  const isClerkConfigured = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'REPLACE_WITH_YOUR_CLERK_PUBLISHABLE_KEY'
  );

  if (!isClerkConfigured) {
    return null;
  }

  try {
    return await currentUser();
  } catch (error) {
    console.warn('Clerk not configured properly:', error);
    return null;
  }
}