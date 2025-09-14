import { fetchProfileAction } from "@/actions";
import OnBoard from "@/components/on-board";
import { getCurrentUserSafe } from "@/utils/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function OnBoardPage() {
  //get the auth user from clerk
  const user = await getCurrentUserSafe();

  // fetch the profile info -> either user is candidate/ user is recruiter
  const profileInfo = user ? await fetchProfileAction(user?.id) : null;

  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremiumUser)
      redirect("/membership");
    else redirect("/");
  } else return <OnBoard />;
}
