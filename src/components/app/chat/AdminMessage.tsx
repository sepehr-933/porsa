"use client";

import React, { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/utils/uiUtils";

import { IMessage } from "@/types/entities";
import IconWrapper from "@/components/common/IconWrapper";
import Download from "@/assets/chat/Download.svg";

import CopyMessage from "@/assets/chat/CopyMessage.svg";
import Refresh from "@/assets/chat/Refresh.svg";
import Like from "@/assets/chat/Like.svg";
import Dislike from "@/assets/chat/Dislike.svg";

const ImageRenderOptions = [
  {
    key: "0",
    title: "Reroll",
  },
  {
    key: "1",
    title: "Variation",
  },
  {
    key: "2",
    title: "upscale",
  },
] as const;

type ActiveOptionUnion = "0" | "1" | "2";

const AdminMessage = ({ message }: { message: IMessage }) => {
  const [activeOption, setActiveOption] = useState<ActiveOptionUnion>("0");

  const handleSetActiveOption = useCallback((option: ActiveOptionUnion) => {
    setActiveOption(option);
  }, []);

  return (
    <div className="text-gray-0 flex flex-col">
      {message.imagesCount && (
        <div className="flex flex-col">
          <div className="flex flex-wrap w-[296px] gap-1.5 mr-auto mb-6">
            {[...new Array(message.imagesCount).keys()].map((i) => (
              <div
                key={i}
                className={cn(
                  "rounded-[10px] bg-gray-800 relative",
                  (message?.imagesCount || 3) < 2
                    ? "w-[299px] h-[299px]"
                    : "w-[144px] h-[144px]",
                )}
              >
                <div className="absolute top-1 right-1">
                  <IconWrapper alt="Download" src={Download} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-1.25 items-center mr-auto pb-1.5">
            {ImageRenderOptions.map((opt) => (
              <button
                key={opt.key}
                className={cn(
                  "rounded-lg border-solid border-[1px] border-gray-600 px-3.75 py-2.75 bg-gray-700 cursor-pointer",
                  activeOption === opt.key && "bg-gray-600",
                )}
                onClick={() => handleSetActiveOption(opt.key)}
              >
                <p className="text-gray-0">{opt.title}</p>
              </button>
            ))}
          </div>
        </div>
      )}
      <ReactMarkdown>{message.text}</ReactMarkdown>

      <div className="flex items-center gap-2.5 mr-auto">
        <IconWrapper alt="Like" src={Like} />
        <IconWrapper alt="Dislike" src={Dislike} />
        <IconWrapper alt="Refresh" src={Refresh} />
        <IconWrapper alt="Copy Message" src={CopyMessage} />
      </div>
    </div>
  );
};

export default AdminMessage;
