import Header from "@/components/layout/Header";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main className="px-1.75 pb-8 w-full">{children}</main>
      </SidebarProvider>
    </div>
  );
};

export default HomeLayout;
