"use client";

import React from "react";
import Link from "next/link";
import { Input } from "./Input";
import { Button } from "./Button";
import { AuthContext, DefaultUser } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { updateState } = React.useContext(AuthContext);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateState({ user: DefaultUser });
    router.push("/");
  };
  const router = useRouter();
  return (
    <div className="flex items-center justify-center">
      <form className="border rounded-md p-4">
        <p className="text-medium">
          Enter your email below to login to your account
        </p>
        <div className="grid gap-4 mx-2 my-4 text-sm">
          <div className="grid gap-2">
            <label htmlFor="email" className="">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <label htmlFor="password">Password</label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full px-4 py-3 h-10"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};
