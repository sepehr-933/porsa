import WhiteButton from "@/components/lib/shadcn/WhiteButton";
import IconWrapper from "@/components/common/IconWrapper";
import RightArrow from "@/assets/login/RightArrow.svg";
import { cn } from "@/utils/uiUtils";

interface LoginInputProps {
  buttonClassName?: string;
  inputClassName?: string;
  className?: string;
  placeholder: string;
  onClick?: () => void;
}

const LoginInput = ({
  buttonClassName,
  inputClassName,
  className,
  placeholder,
  onClick,
}: Readonly<LoginInputProps>) => {
  return (
    <div className={cn("bg-gray-700 rounded-2xl relative", className)}>
      <WhiteButton
        className={cn(
          "bg-gray-0 absolute top-1/2 -translate-y-1/2 right-1 p-2 rounded-xl w-[37px] ",
          buttonClassName,
        )}
        onClick={onClick}
      >
        <IconWrapper alt="Submit" src={RightArrow} />
      </WhiteButton>
      <input
        className={cn(
          "placeholder-gray-600 p-2.75 placeholder:text-center text-center text-gray-0 focus:outline-none w-full",
          inputClassName,
        )}
        placeholder={placeholder}
        max={12}
      />
    </div>
  );
};

export default LoginInput;
