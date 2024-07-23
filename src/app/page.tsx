"use client";

import React from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = React.useContext(AuthContext);
  const router = useRouter();
  if (user) {
    return (
      <div className="h-screen pt-4">
        <Navbar name={user.name} />
      </div>
    );
  } else {
    router.push("/login");
  }
}
