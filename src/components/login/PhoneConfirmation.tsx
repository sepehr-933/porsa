import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/lib/shadcn/InputOtp";

const PhoneConfirmation = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-0 text-lg mb-5.5">پرسا همه کاراتو انجام میده</p>
      <p className="text-[8px] text-[#C6C5C3] mb-1">ارسال شده به</p>
      <p className="text-xs text-[#BFBEBC] font-medium mb-2">0912 222 2222</p>
      <button className="text-[#3A80C5] font-semibold mb-5.5">
        تغییر شماره
      </button>
      <div dir="ltr" className="mb-5.5">
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <button className="text-[#3A80C5] font-semibold text-underline mb-5.5">
        ارسال مجدد
      </button>
      <p className="text-[8px] text-[#B5B5B5]">
        با ورود به پرسا ای آی، شما
        <b className="text-gray-0 px-1">قوانین و مقررات</b>
        را می‌پذیرید.
      </p>
    </div>
  );
};

export default PhoneConfirmation;
