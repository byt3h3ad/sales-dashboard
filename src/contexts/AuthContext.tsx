import React from "react";

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
}

export const DefaultUser: User = {
  id: 1,
  username: "batman",
  name: "Bruce Wayne",
  email: "bruce@wayne.com",
};

export interface AppState {
  user?: User;
  updateState: (state: Partial<AppState>) => void;
}

const DefaultState: AppState = {
  user: DefaultUser,
  updateState: (state: Partial<AppState>) => {},
};

export const AuthContext = React.createContext<AppState>(DefaultState);
