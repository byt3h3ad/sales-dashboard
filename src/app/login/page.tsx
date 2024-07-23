import { LoginForm } from "@/components/LoginForm";
import React from "react";

export default function Page() {
  return (
    <main className="flex h-screen justify-center items-center">
      <section className="grid gap-4">
        <h1 className="text-3xl ml-4">Welcome!</h1>
        <LoginForm />
      </section>
    </main>
  );
}
