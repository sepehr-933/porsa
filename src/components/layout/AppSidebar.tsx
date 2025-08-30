"use client";

import Home from "@/assets/sidebar/Home.svg";
import Pears from "@/assets/sidebar/Pears.svg";
import Cube from "@/assets/sidebar/Cube.svg";
import Crown from "@/assets/sidebar/Crown.svg";
import Search from "@/assets/sidebar/Search.svg";
import Chat from "@/assets/sidebar/Chat.svg";
import UserAvatar from "@/assets/sidebar/UserAvatar.svg";
import MenuOptions from "@/assets/sidebar/MenuOptions.svg";
import Pin from "@/assets/sidebar/Pin.svg";
import UnPin from "@/assets/sidebar/Unpin.svg";
import Share from "@/assets/sidebar/Share.svg";
import EditPen from "@/assets/sidebar/EditPen.svg";
import RedTrashCan from "@/assets/sidebar/RedTrashCan.svg";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import IconWrapper from "@/components/common/IconWrapper";

import Logo from "@/assets/Logo.svg";
import DarkModeSwitch from "@/components/common/DarkSwitch";
import { cn } from "@/utils/uiUtils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/lib/shadcn/Menu";
import { useMemo, useState } from "react";

// Menu items.
const items = [
  {
    title: "خانه",
    url: "#",
    icon: Home,
  },
  {
    title: "ابزار و مدل ها",
    url: "#",
    icon: Cube,
  },
  {
    title: "کالری شمار",
    url: "#",
    icon: Crown,
    className: "bg-[#FEC33A14]",
  },
  {
    title: "ارتقا عضویت",
    url: "#",
    icon: Pears,
    className: "bg-[#62AD6E14]",
  },
];

export function AppSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // declared here and not out of component because later we need to add onClicks
  const contextMenuItems = useMemo(
    () => [
      {
        icon: EditPen,
        title: "تغییر نام",
        id: 0,
      },
      {
        icon: Pin,
        title: "پین کردن",
        id: 1,
      },
      {
        icon: UnPin,
        title: "برداشتن پین",
        id: 2,
      },
      {
        icon: Share,
        title: "اشتراک گذاری",
        id: 3,
      },
      {
        icon: RedTrashCan,
        title: "حذف",
        id: 4,
      },
    ],
    [],
  );

  return (
    <Sidebar side="right" className="!bg-gray-700">
      <SidebarHeader className="!bg-gray-700 flex flex-row pe-4 ps-2">
        <IconWrapper alt="Logo" src={Logo} />
        <h2 className="font-bold text-xl text-gray-0 ms-auto">پرسا ای آی</h2>
        <DarkModeSwitch />
      </SidebarHeader>
      <SidebarContent className="!bg-gray-700">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mb-3">
              <div className="flex flex-col gap-1.5 relative overflow-x-hidden">
                <button className="absolute top-4 left-0 -translate-x-[100%] w-[30px] h-[30px] text-gray-0 z-[1000] bg-[#fff]">
                  close
                </button>
                {items.map((item) => (
                  <button
                    className={cn(
                      "flex gap-2 items-center cursor-pointer px-2 py-3 rounded-lg",
                      item.className,
                    )}
                    key={item.title}
                  >
                    <IconWrapper src={item.icon} alt={item.title} />
                    <h3 className="font-normal text-base text-gray-0">
                      {item.title}
                    </h3>
                  </button>
                ))}
              </div>
            </SidebarMenu>
            <div className="flex justify-between pe-2 mb-3">
              <input
                className="focus:outline-none placeholder-gray-600 font-normal text-base"
                placeholder="گفتگوها"
              />
              <IconWrapper alt="Search" src={Search} />
            </div>
            <div className="flex flex-col gap-2.5">
              {[...new Array(10)].map((_, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex items-center gap-3 pe-2 hover:bg-gray-500 py-1.75 rounded-sm cursor-pointer relative"
                >
                  <IconWrapper alt="Chat" src={Chat} />
                  <p className="text-base text-gray-0">
                    دستور ساخت غذای رژیمی برای ...
                  </p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      {hoveredIndex === i && (
                        <div className="absolute start-1 top-2.5">
                          <IconWrapper alt="Menu Options" src={MenuOptions} />
                        </div>
                      )}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gray-700 border-none">
                      <div dir="rtl" className="w-[183px] flex flex-col gap-5">
                        {contextMenuItems.map((item, i) => (
                          <>
                            {i === 3 && (
                              <DropdownMenuSeparator
                                key={item.id}
                                className="bg-gray-800"
                              />
                            )}
                            <DropdownMenuItem
                              key={item.id}
                              className="text-gray-0 hover:bg-gray-500 cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <IconWrapper alt={item.title} src={item.icon} />
                                <p>{item.title}</p>
                              </div>
                            </DropdownMenuItem>
                          </>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-gray-700 border-gray-600 border-solid border-t-[1px] py-6 px-8">
        <div className="flex gap-2 items-center">
          <IconWrapper
            alt="User Avatar"
            src={UserAvatar}
            className="w-[35px] h-[35px]"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-0">09300284898</p>
            <p className="text-sm text-gray-600">رایگان</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
