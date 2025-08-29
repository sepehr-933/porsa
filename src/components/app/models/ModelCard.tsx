import IconWrapper from "@/components/common/IconWrapper";

import Grok from "@/assets/models/Grok.svg";

const ModelCard = () => (
  <div className="bg-gray-700 rounded-lg px-2 py-3 w-full flex flex-col gap-2.5 border-[1px] border-gray-600 border-solid relative">
    {/* Badges */}
    <div className="flex items-center gap-1 absolute top-0 -translate-y-1/2 start-[9px]">
      <span className="bg-brand-yellow rounded-full border border-[#FFCDA1] px-2">
        <p className="text-gray-900 text-sm">پرو</p>
      </span>
      <span className="bg-brand-orange rounded-full border border-[#FFCDA1] px-2">
        <p className="text-gray-900 text-sm">جدید</p>
      </span>
    </div>

    <div className="flex gap-1 items-center">
      <IconWrapper alt="Grok" src={Grok} />
      <p className="text-gray-0 text-md font-semibold">Grok 4</p>
    </div>
    <div className="flex items-center gap-0.75">
      <span className="block py-0.75 px-2 rounded-full bg-gray-600 text-gray-0 text-sm">
        <p className="w-max">مدل استدلال</p>
      </span>{" "}
      <span className="block py-0.75 px-2 rounded-full bg-gray-600 text-gray-0 text-sm">
        <p className="w-max">برنامه‌نویسی کد</p>
      </span>
      <span className="block py-0.75 px-2 rounded-full bg-gray-600 text-gray-0 text-sm">
        <p className="w-max">جدید</p>
      </span>
    </div>
    <p className="text-gray-0 text-sm">
      مدل متن‌باز Moonshot، مقرون‌به‌صرفه و برجسته در برنامه‌نویسی و استدلال
      ریاضی.
    </p>
  </div>
);

export default ModelCard;
