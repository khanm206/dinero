"use client";
import { createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const data = {};
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppProvider;
