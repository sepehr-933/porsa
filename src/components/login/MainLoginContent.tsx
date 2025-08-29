import WhiteButton from "@/components/lib/shadcn/WhiteButton";
import IconWrapper from "@/components/common/IconWrapper";
import Google from "@/assets/login/Google.svg";
import Email from "@/assets/login/Email.svg";
import { Separator } from "@/components/ui/separator";
import LoginInput from "@/components/formElements/LoginInput";
import { LoginSteps } from "@/types/shared-props";

interface MainLoginContentProps {
  handleChangeLoginStep?: (step: LoginSteps) => () => void;
}

const MainLoginContent = ({
  handleChangeLoginStep,
}: Readonly<MainLoginContentProps>) => {
  return (
    <>
      <h4 className="text-gray-0 text-lg text-center mb-7">
        پرسا همه کاراتو انجام میده
      </h4>
      <div className="flex flex-col gap-3 mb-4.25">
        <WhiteButton className="bg-gray-0 text-gray-900 w-full hover:bg-gray-300 cursor-pointer">
          <IconWrapper alt="Google" src={Google} />
          <p className="text-gray-900 font-semibold">ورود با گوگل</p>
        </WhiteButton>
        <WhiteButton
          onClick={handleChangeLoginStep?.(1)}
          className="bg-gray-0 text-gray-900 w-full hover:bg-gray-300 cursor-pointer"
        >
          <IconWrapper alt="Google" src={Email} />
          <p className="text-gray-900 font-semibold">ورود با ایمیل</p>
        </WhiteButton>
      </div>
      <div className="flex items-center gap-3.25 justify-between mb-5">
        <Separator className="bg-gray-600 !w-[85px]" />
        <p className="text-[#C1C0BC] text-xs font-semibold">یا از طریق</p>
        <Separator className="bg-gray-600 !w-[85px]" />
      </div>
      <LoginInput
        placeholder="ورود با شماره تلقن"
        onClick={handleChangeLoginStep?.(2)}
      />
    </>
  );
};

export default MainLoginContent;
