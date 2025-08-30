import IconWrapper from "@/components/common/IconWrapper";
import SemiColon from "@/assets/chat/SemiColon.svg";
import Photo from "@/assets/chat/Photo.svg";
import Internet from "@/assets/chat/Internet.svg";

// this component is not used because then we were not able to render the chat without implementing any logic
// , but you can see the ui by importing it and replace the MessageList.tsx component with it.

const Splash = () => {
  return (
    <>
      <div className="mt-20 flex flex-col gap-6 items-center mb-6 max-w-[264px] mx-auto">
        <IconWrapper src={SemiColon} alt="hamburger bars" />
        <h1 className="font-bold text-gray-0 text-xxl text-center">
          چطور میتونم به شما کمک کنم؟
        </h1>
      </div>
      <div className="flex flex-wrap gap-1.5 max-w-[306px] mx-auto">
        <span className="text-sm block py-1.5 px-3 border-[1px] border-gray-700 border-solid flex items-center gap-1.25 rounded-full">
          <IconWrapper alt="Photo" src={Photo} />
          <p className="text-sm text-gray-0">تولید عکس</p>
        </span>
        <span className="text-sm block py-1.5 px-3 border-[1px] border-gray-700 border-solid flex items-center gap-1.25 rounded-full">
          <IconWrapper alt="Internet" src={Internet} />
          <p className="text-sm text-gray-0">جست و جو در اینترنت</p>
        </span>
        <span className="text-sm block py-1.5 px-3 border-[1px] border-gray-700 border-solid flex items-center gap-1.25 rounded-full">
          <IconWrapper alt="Photo" src={Photo} />
          <p className="text-sm text-gray-0">تولید عکس</p>
        </span>
        <span className="text-sm block py-1.5 px-3 border-[1px] border-gray-700 border-solid flex items-center gap-1.25 rounded-full">
          <IconWrapper alt="Photo" src={Photo} />
          <p className="text-sm text-gray-0">تولید عکس</p>
        </span>
      </div>
    </>
  );
};

export default Splash;
