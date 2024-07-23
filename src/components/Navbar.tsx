import React from "react";
import { SignOut } from "./SignOut";

export const Navbar = ({ name }: { name: string }) => {
  return (
    <div className="flex justify-between px-8 border-b border-gray-400 pb-2">
      <h1 className="text-2xl font-bold">My Dashboard</h1>
      <div className="flex justify-end items-center space-x-4">
        <p className="hover:cursor-pointer group">
          Welcome{" "}
          <span className="group-hover:underline underline-offset-2">
            {name}
          </span>
        </p>
        <SignOut />
      </div>
    </div>
  );
};