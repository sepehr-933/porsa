"use client";

import { useState } from "react";
import DarkMoon from "@/assets/DarkMoon.svg";
import IconWrapper from "@/components/common/IconWrapper";

export default function DarkModeSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative flex items-center w-[70px] h-[30px] rounded-full transition-colors duration-300 px-4 
        ${enabled ? "bg-gray-200 justify-end" : "bg-gray-800"} 
        shadow-inner border border-gray-500`}
    >
      {/* Toggle Circle */}
      <IconWrapper
        alt="DarkMoon"
        src={DarkMoon}
        className={`absolute left-0 top-[1.5px] flex items-center justify-center rounded-full shadow-md 
          transition-all duration-300 
          ${enabled ? "translate-x-[37px]" : "-translate-x-[2px]"}
          `}
      />

      {/* Label */}
      <span
        className={`text-xs font-medium transition-colors duration-300 text-center
          ${enabled ? "text-gray-600" : "text-gray-600"}`}
      >
        {enabled ? "Light" : "Dark"}
      </span>
    </button>
  );
}
