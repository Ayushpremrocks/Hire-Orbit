import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import CommonLayout from "@/components/common-layout";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Orbit",
  description: "An innovative job platform",
};

// Check if Clerk is properly configured
const isClerkConfigured = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'REPLACE_WITH_YOUR_CLERK_PUBLISHABLE_KEY'
);

export default function RootLayout({ children }) {
  const content = (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <CommonLayout
            attribute="class"
            defaultTheme="system"
            children={children}
          />
        </Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );

  // Only wrap with ClerkProvider if properly configured
  if (isClerkConfigured) {
    return (
      <ClerkProvider>
        {content}
      </ClerkProvider>
    );
  }

  return content;
}
