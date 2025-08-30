"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { SidebarContextType } from "@/types/contexts";

/* forced to create this context because shadcn ctx provider ruins the whole layout */

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const GeneralProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useGeneralState = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useGeneralState must be used within a GeneralProvider");
  }
  return context;
};
