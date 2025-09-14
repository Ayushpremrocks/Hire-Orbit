import { getCurrentUserSafe } from "@/utils/auth";
import Header from "../header";
import { fetchProfileAction } from "@/actions";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default async function CommonLayout({ children,...props }) {
  const user = await getCurrentUserSafe();
  const profileInfo = user ? await fetchProfileAction(user?.id) : null;
  // console.log(user)
  return (
    <NextThemesProvider {...props}>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* Header Component */}
        <Header
          profileInfo={profileInfo}
          user={JSON.parse(JSON.stringify(user))}
        />
        {/* Main Component */}
        <main>{children}</main>
      </div>
    </NextThemesProvider>
  );
}
