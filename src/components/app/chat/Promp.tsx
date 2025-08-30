"use client";

import { ReactNode, useCallback, useState } from "react";
import { cn } from "@/utils/uiUtils";

import IconWrapper from "@/components/common/IconWrapper";
import Gallery from "@/assets/prompIcons/Gallery.svg";
import Settings from "@/assets/prompIcons/Settings.svg";
import Microphone from "@/assets/prompIcons/Microphone.svg";
import Send from "@/assets/prompIcons/Send.svg";
import LoginModal from "@/components/modals/LoginModal";

const IconWithBorder = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => (
  <span
    className={cn(
      "rounded-full w-[35px] h-[35px] border-solid border-[1px] border-gray-600 flex items-center justify-center",
      className,
    )}
  >
    {children}
  </span>
);

const PromptBox = () => {
  const [open, setOpen] = useState(false);

  const handleOpenLoginModal = useCallback(() => {
    setOpen(true);
  }, []);

  const handleChangeModalOpen = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <>
      <div
        onClick={handleOpenLoginModal}
        className="rounded-t-4xl lg:rounded-4xl px-3.75 py-3.25 flex flex-col gap-2.25 bg-gray-800 absolute bottom-0 left-0 w-full lg:w-[95%] lg:left-1/2 lg:-translate-x-1/2 lg:bottom-10 h-[var(--height-prompt)]"
      >
        <input
          className="pb-6 focus:outline-none placeholder-gray-0"
          placeholder="از پرسا بپرس ..."
        />
        <div className="flex gap-3 items-center">
          <IconWithBorder>
            <IconWrapper alt="gallery" src={Gallery} />
          </IconWithBorder>
          <IconWithBorder className="ms-auto">
            <IconWrapper alt="settings" src={Settings} />
          </IconWithBorder>
          <span className="rounded-full flex items-center justify-center">
            <IconWrapper alt="microphone" src={Microphone} />
          </span>
          <span className="rounded-full flex items-center justify-center">
            <IconWrapper alt="send" src={Send} />
          </span>
        </div>
      </div>
      <LoginModal open={open} onOpenChange={handleChangeModalOpen} />
    </>
  );
};

export default PromptBox;
