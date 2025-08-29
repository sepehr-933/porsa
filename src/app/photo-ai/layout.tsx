"use client";

import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useGeneralState } from "@/contexts/GeneralAppStateContext";
import PhotoAiHeader from "@/components/layout/PhotoAiHeader";

const PhotoAi = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isSidebarOpen, setIsSidebarOpen } = useGeneralState();

  return (
    <div className="bg-gray-900 min-h-screen">
      <PhotoAiHeader />
      <SidebarProvider open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <AppSidebar />
        <main className="w-full h-[calc(100vh-190px)] lg:h-[calc(100vh-230px)] overflow-y-auto">
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default PhotoAi;
