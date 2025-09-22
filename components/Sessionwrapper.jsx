// components/SessionWrapper.js
"use client"; // use this if using Next.js App Router
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Wraps the app with SessionProvider
export default function SessionWrapper({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

// Optional: HOC for protecting pages
export function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>; // or a spinner
  }

  if (!session) {
    router.push("/admin/login"); // redirect if not logged in
    return null;
  }

  return <>{children}</>;
}
