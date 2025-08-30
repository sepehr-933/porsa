"use client";

import { ReactNode } from "react";

import HomeHeader from "@/components/layout/HomeHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useGeneralState } from "@/contexts/GeneralAppStateContext";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { isSidebarOpen } = useGeneralState();

  return (
    <div className="bg-gray-900 min-h-screen">
      <HomeHeader />
      <SidebarProvider open={isSidebarOpen}>
        <AppSidebar />
        <main className="px-1.75 pb-8 w-full">{children}</main>
      </SidebarProvider>
    </div>
  );
};

export default HomeLayout;
