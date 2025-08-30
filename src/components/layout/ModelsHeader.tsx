"use client";

import HamburgerBarsIcon from "@/assets/HamburgurBars.svg";
import EditIcon from "@/assets/models/Edit.svg";
import IconWrapper from "@/components/common/IconWrapper";
import { useGeneralState } from "@/contexts/GeneralAppStateContext";
import { cn } from "@/utils/uiUtils";
import { useIsMobile } from "@/hooks/use-mobile";

const ModelsHeader = () => {
  const { isSidebarOpen, toggleSidebar } = useGeneralState();
  const isMobile = useIsMobile();

  return (
    <header
      className={cn(
        "w-full py-5.5 px-4 bg-gray-900 flex items-center justify-between",
        isSidebarOpen && !isMobile && "w-[calc(100%-18.0625rem)] mr-auto",
      )}
    >
      <button onClick={toggleSidebar} className="cursor-pointer">
        <IconWrapper src={HamburgerBarsIcon} alt="hamburger bars" />
      </button>
      <h1 className="text-lg font-semibold text-gray-0">ابزار و مدل ها</h1>
      <IconWrapper src={EditIcon} alt="hamburger bars" />
    </header>
  );
};

export default ModelsHeader;
