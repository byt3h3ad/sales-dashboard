import React from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Button } from "./Button";

export const SignOut = () => {
  const { updateState } = React.useContext(AuthContext);
  const handleSignOut = () => {
    updateState({ user: undefined });
    console.log("signed out");
  };
  return (
    <Button className="h-10 px-4 py-3" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};
