import { AuthContext, type AppState } from "@/contexts/AuthContext";
import React from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = React.useState({});
  const updateState = (newState: Partial<AppState>) =>
    setState({ ...state, ...newState });
  return (
    <AuthContext.Provider value={{ ...state, updateState }}>
      {children}
    </AuthContext.Provider>
  );
};
