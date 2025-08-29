"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type SidebarContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  toggleSidebar: () => void;
};

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
    throw new Error("useSidebar must be used within a GeneralProvider");
  }
  return context;
};
