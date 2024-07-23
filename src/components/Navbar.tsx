import React from "react";
import { SignOut } from "./SignOut";

export const Navbar = ({ name }: { name: string }) => {
  return (
    <nav className="flex justify-between items-center px-8 border-b border-gray-400 py-4">
      <h1 className="text-xl font-bold">My Dashboard</h1>
      <div className="flex justify-end items-center space-x-4">
        <p className="hover:cursor-pointer group hidden">
          Welcome{" "}
          <span className="group-hover:underline underline-offset-2">
            {name}
          </span>
        </p>
        <div>
          <SignOut />
        </div>
      </div>
    </nav>
  );
};
