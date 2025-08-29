"use client";

import HamburgerBarsIcon from "@/assets/HamburgurBars.svg";
import UserIcon from "@/assets/User.svg";
import { useGeneralState } from "@/contexts/GeneralAppStateContext";
import IconWrapper from "@/components/common/IconWrapper";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const HomeHeader = () => {
  const { isSidebarOpen, toggleSidebar } = useGeneralState();
  const isMobile = useIsMobile();

  return (
    <header
      className={cn(
        "bg-gray-900 w-full h-header flex items-center justify-between py-5.5 px-3.25",
        isSidebarOpen && !isMobile && "w-[calc(100%-18.0625rem)] mr-auto",
      )}
    >
      <button onClick={toggleSidebar} className="cursor-pointer">
        <IconWrapper src={HamburgerBarsIcon} alt="hamburger bars" />
      </button>
      <IconWrapper src={UserIcon} alt="user icon" />
    </header>
  );
};

export default HomeHeader;
