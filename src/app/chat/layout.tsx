"use client";

import { ReactNode } from "react";

import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ChatHeader from "@/components/layout/ChatHeader";
import { useGeneralState } from "@/contexts/GeneralAppStateContext";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { isSidebarOpen, setIsSidebarOpen } = useGeneralState();

  return (
    <div className="bg-gray-900 min-h-screen">
      <ChatHeader />
      <SidebarProvider open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <AppSidebar />
        <main className="w-full h-[calc(100vh-190px)] lg:h-[calc(100vh-230px)] overflow-y-auto">
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default HomeLayout;
