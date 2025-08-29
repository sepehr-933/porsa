import Image from "next/image";
import HomePageHeading from "@/components/app/home/HomePageHeading";
import AiChips from "@/components/app/home/AiChips";
import SelectImageFilter from "@/components/app/home/SelectImageFilter";
import PromptBox from "@/components/app/home/PromptBox";

import TwoPhones from "@/assets/images/TwoPhones.svg";
import WhiteButton from "@/components/lib/shadcn/WhiteButton";
import IconWrapper from "@/components/common/IconWrapper";

import GooglePlay from "@/assets/GooglePlay.svg";
import Android from "@/assets/Android.svg";
import Apple from "@/assets/Apple.svg";

export default function Home() {
  return (
    <div className="pt-6.5 text-gray-0">
      <HomePageHeading />
      <SelectImageFilter />
      <AiChips />
      <PromptBox />
      <div className="flex flex-col lg:gap-6 lg:flex-row-reverse lg:justify-between lg:max-w-[943px] mx-auto mt-17">
        <div className="h-[299px] w-[298px] mx-auto mb-5">
          <Image src={TwoPhones} alt="Two Phones" width={298} height={299} />
        </div>
        <div className="flex flex-col lg:mx-5 mx-auto gap-5 md:items-center max-w-[318px] lg:max-w-[443px]">
          <p className="text-xxl font-bold text-gray-0">
            با یک کلیک پرسا رو دانلود کن!
          </p>
          <p className="text-base font-normal text-balance text-center h-full">
            این اپلیکیشن همه مدل‌های معروف AI رو یکجا داره؛ متن بنویس، عکس بساز،
            ویدیو تولید کن، صدا بساز و هر کاری با هوش مصنوعی انجام بده. مناسب
            تولیدکننده‌های محتوا، مارکترها، دانشجوها، برنامه نویس ها ، محقق‌ها و
            هرکسی که می‌خواد کارش رو سریع‌تر و حرفه‌ای‌تر انجام بده.
          </p>
          <div className="flex flex-col gap-3 mx-auto">
            <WhiteButton className="flex gap-4 bg-gray-0 w-full rounded-xl">
              <p className="text-gray-900 text-base font-normal">
                دانلود از گوگل پلی
              </p>
              <IconWrapper alt="Google Play" src={GooglePlay} />
            </WhiteButton>
            <div className="flex items-center gap-4">
              <WhiteButton className="flex gap-4 bg-gray-0 w-full rounded-xl">
                <p className="text-gray-900 text-base font-normal">
                  دانلود مستقیم
                </p>
                <IconWrapper alt="Android" src={Android} />
              </WhiteButton>
              <WhiteButton className="flex gap-4 bg-gray-0 w-full rounded-xl">
                <p className="text-gray-900 text-base font-normal">
                  دانلود مستقیم
                </p>
                <IconWrapper alt="Apple" src={Apple} />
              </WhiteButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
