"use client";

import IconWrapper from "@/components/common/IconWrapper";
import Gallery from "@/assets/photAi/Gallery.svg";
import Edit from "@/assets/photAi/Edit.svg";
import { useGeneralState } from "@/contexts/GeneralAppStateContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/utils/uiUtils";

const PhotoAiHeader = () => {
  const { isSidebarOpen, toggleSidebar } = useGeneralState();
  const isMobile = useIsMobile();

  return (
    <header
      className={cn(
        "w-full py-5.5 px-4 bg-gray-900 flex items-center justify-between border-solid border-gray-600 border-b-[1px]",
        isSidebarOpen && !isMobile && "w-[calc(100%-18.0625rem)] mr-auto",
      )}
    >
      <button onClick={toggleSidebar} className="flex gap-1.25">
        <IconWrapper src={Gallery} alt="Gallery" />
        <p className="text-gray-0 text-md ">فوتو ای آی</p>
      </button>
      <div className="flex items-center gap-1">
        <p className="text-gray-0 text-md ">گفتگوی جدید</p>
        <IconWrapper alt="Edit" src={Edit} />
      </div>
    </header>
  );
};

export default PhotoAiHeader;
