import { SignUp } from "@clerk/nextjs";

// Check if Clerk is configured
const isClerkConfigured = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'REPLACE_WITH_YOUR_CLERK_PUBLISHABLE_KEY'
);

export default function Page() {
  if (!isClerkConfigured) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Authentication Not Configured</h2>
          <p className="text-gray-600">
            Clerk authentication is not set up yet. Please configure your Clerk API keys to enable sign-up functionality.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <SignUp />
    </div>
  );
}