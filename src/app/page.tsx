"use client";

import React from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Dashboard } from "@/components/Dashboard";
import Link from "next/link";

export default function Home() {
  const { user } = React.useContext(AuthContext);
  if (user) {
    return (
      <div className="h-screen">
        <Navbar name={user.name} />
        <Dashboard />
      </div>
    );
  } else {
    return (
      <main className="grid place-items-center h-svh">
        <Link
          href="/login"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-2xl font-medium transition-colors bg-black text-gray-200 hover:text-gray-300 hover:bg-zinc-900 hover:border-gray-400 px-6 py-2"
        >
          Login to continue
        </Link>
      </main>
    );
  }
}
