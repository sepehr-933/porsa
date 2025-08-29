import Image from "next/image";

import KoreanGirl from "@/assets/photAi/KoreanGirl.jpg";
import OneOnOne from "@/assets/photAi/OneOnOne.svg";
import NineSixteen from "@/assets/photAi/NineSixteen.svg";
import IconWrapper from "@/components/common/IconWrapper";

const PhotoAi = () => {
  return (
    <div className="flex flex-col h-full pt-8.25">
      <div className="max-w-[807px] mx-auto grid grid-cols-2 gap-4.25 items-center">
        <Image src={KoreanGirl} alt="Korean Girl" className="rounded-[15px]" />
        <div className="w-full flex flex-col gap-3.75 h-full">
          <p className="font-semibold text-xl text-gray-0">نسبت تصویر</p>
          <div className="grid grid-cols-4 items-center gap-2.25">
            <div className="rounded-[15px] border-gray-0 border-solid border-[1px] w-[75px] h-[75px] flex flex-col items-center justify-center bg-gray-800">
              <IconWrapper alt="1:1" src={OneOnOne} />
              <p className="font-semibold text-gray-0">1:1</p>
            </div>
            <div className="rounded-[15px] border-gray-600 border-solid border-[1px] w-[75px] h-[75px] flex flex-col items-center justify-center">
              <IconWrapper alt="9:16" src={NineSixteen} />
              <p className="font-semibold text-gray-700">9:16</p>
            </div>
            <div className="rounded-[15px] border-gray-600 border-solid border-[1px] w-[75px] h-[75px] flex flex-col items-center justify-center">
              <IconWrapper alt="9:16" src={NineSixteen} />
              <p className="font-semibold text-gray-700">9:16</p>
            </div>
            <div className="rounded-[15px] border-gray-600 border-solid border-[1px] w-[75px] h-[75px] flex flex-col items-center justify-center">
              <IconWrapper alt="9:16" src={NineSixteen} />
              <p className="font-semibold text-gray-700">9:16</p>
            </div>
            <div className="rounded-[15px] border-gray-600 border-solid border-[1px] w-[75px] h-[75px] flex flex-col items-center justify-center">
              <IconWrapper alt="9:16" src={NineSixteen} />
              <p className="font-semibold text-gray-700">9:16</p>
            </div>
          </div>
          <p className="font-semibold text-xl text-gray-0">کیفیت تصویر</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoAi;
