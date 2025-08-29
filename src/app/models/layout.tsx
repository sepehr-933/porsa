"use client";

import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ModelsHeader from "@/components/layout/ModelsHeader";
import { useGeneralState } from "@/contexts/GeneralAppStateContext";

const ModelsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isSidebarOpen, setIsSidebarOpen } = useGeneralState();

  return (
    <div className="bg-gray-900 min-h-screen">
      <ModelsHeader />
      <SidebarProvider open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <AppSidebar />
        <main className="px-1.75 pb-8 w-full">{children}</main>
      </SidebarProvider>
    </div>
  );
};

export default ModelsLayout;
