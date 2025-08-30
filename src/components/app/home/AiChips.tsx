import Chip from "@/components/common/Chip";
import IconWrapper from "@/components/common/IconWrapper";

import AiSearch from "@/assets/AiSearch.svg";

const AiChips = () => {
  return (
    <div
      dir="ltr"
      className="flex flex-wrap gap-2.5 items-center px-1.75 mb-4 lg:max-w-[800px] lg:mx-auto"
    >
      {[...new Array(5)].map((_, i) => (
        <Chip
          key={i}
          icon={
            <IconWrapper src={AiSearch} alt="search ai" className="w-[25px]" />
          }
          text="Deep search"
        />
      ))}
    </div>
  );
};

export default AiChips;
