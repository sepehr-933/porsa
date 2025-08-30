"use client";
import Head from "next/head";
import { useCallback, useState } from "react";

import IconWrapper from "@/components/common/IconWrapper";
import { cn } from "@/utils/uiUtils";

import FirstImage from "@/assets/images/home-select/first.svg";
import FirstHoverImage from "@/assets/images/home-select/firstHover.svg";
import SecondImage from "@/assets/images/home-select/second.svg";
import SecondHoverImage from "@/assets/images/home-select/secondHover.svg";
import ThirdImage from "@/assets/images/home-select/third.svg";
import ThirdHoverImage from "@/assets/images/home-select/thirdHover.svg";
import FourthImage from "@/assets/images/home-select/fourth.svg";
import FourthHoverImage from "@/assets/images/home-select/fourthHover.svg";

type StateType = 1 | 2 | 3 | 4;

const imagesTitles = [
  {
    title: "عکس",
    id: 1,
  },
  {
    title: "چت",
    id: 2,
  },
  {
    title: "ویدیو",
    id: 3,
  },
  {
    title: "پیشرفته",
    id: 4,
  },
] as const;

const SelectImageFilter = () => {
  const [activeImage, setActiveImage] = useState<StateType>(4);

  const handleChangeActiveImage = useCallback(
    (imgNumber: StateType) => {
      setActiveImage(imgNumber);
    },
    [setActiveImage],
  );

  return (
    <>
      {/* this preload is because we need to instantly render images. if we had svgs we did not need this */}
      <Head>
        <link rel="preload" as="image" href={FourthHoverImage} />
        <link rel="preload" as="image" href={ThirdHoverImage} />
        <link rel="preload" as="image" href={SecondHoverImage} />
        <link rel="preload" as="image" href={FirstImage} />
      </Head>
      <div className="flex flex-col gap-3 max-w-[350px] items-center mx-auto mb-10">
        <div className="flex gap-2 border-b-[3px] border-gray-600 border-solid overflow-y-hidden">
          <IconWrapper
            alt="fourth"
            src={activeImage === 1 ? FourthHoverImage : FourthImage}
            className="-translate-x-[30%] translate-y-[45%]"
          />
          <IconWrapper
            alt="third"
            src={activeImage === 2 ? ThirdHoverImage : ThirdImage}
            className="bg-gray-900 z-1 translate-y-[25%]"
          />
          <IconWrapper
            alt="second"
            src={activeImage === 3 ? SecondHoverImage : SecondImage}
            className="translate-y-[25%] bg-gray-900 z-1"
          />
          <IconWrapper
            alt="first"
            src={activeImage === 4 ? FirstHoverImage : FirstImage}
            className="translate-x-[30%] translate-y-[45%]"
          />
        </div>
        <div className="flex justify-between items-center w-full gap-11">
          {imagesTitles.map((title) => (
            <button
              key={title.id}
              className={cn(
                "text-xl font-semibold text-gray-600 cursor-pointer",
                activeImage === title.id && "text-gray-0",
              )}
              onClick={() => handleChangeActiveImage(title.id)}
            >
              {title.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectImageFilter;
