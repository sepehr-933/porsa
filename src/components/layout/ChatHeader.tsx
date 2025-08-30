"use client";

import HamburgerBarsIcon from "@/assets/HamburgurBars.svg";
import EditIcon from "@/assets/models/Edit.svg";
import IconWrapper from "@/components/common/IconWrapper";
import DownArrow from "@/assets/chat/ChevronDown.svg";
import { useGeneralState } from "@/contexts/GeneralAppStateContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/utils/uiUtils";

const ChatHeader = () => {
  const { isSidebarOpen, toggleSidebar } = useGeneralState();
  const isMobile = useIsMobile();

  return (
    <header
      className={cn(
        "w-full py-5.5 px-4 bg-gray-900 flex items-center justify-between border-solid border-gray-600 border-b-[1px]",
        isSidebarOpen && !isMobile && "w-[calc(100%-18.0625rem)] mr-auto",
      )}
    >
      <button onClick={toggleSidebar}>
        <IconWrapper src={HamburgerBarsIcon} alt="hamburger bars" />
      </button>
      <div className="flex items-center gap-1">
        <IconWrapper
          alt="Right Arrow"
          src={DownArrow}
          className="fill-gray-0"
        />
        <h1 className="text-lg font-semibold text-gray-0">GPT-4o</h1>
      </div>
      <IconWrapper src={EditIcon} alt="hamburger bars" />
    </header>
  );
};

export default ChatHeader;
