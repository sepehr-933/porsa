import Image from "next/image";
import Envelope from "@/assets/login/Envelope.svg";

const EmailDelivered = () => {
  return (
    <div className="flex flex-col gap-2.25">
      <div className="bg-gray-800 rounded-3xl border-[#292826] p-4.5 border-solid border-[1px] flex flex-col items-center">
        <p className="text-gray-0 text-lg mb-8.5">ایمیلتو چک کن تا وارد بشی!</p>
        <div className="border-[#292826] border-solid border-[1px] rounded-3xl p-4.5 mb-4.25">
          <p className="text-[8px] text-[#C6C5C3] mb-1">ارسال شده به</p>
          <p className="text-[#BFBEBC] text-xs font-medium mb-2">
            erfanfoladifar@gmail.com
          </p>
          <Image src={Envelope} alt="Envelope" />
        </div>
        <button className="text-[#3A80C5] font-semibold mb-5.5">
          تغییر آدرس ایمیل
        </button>
      </div>
      <p className="text-[8px] text-[#B5B5B5]">
        با ورود به پرسا ای آی، شما
        <b className="text-gray-0 px-1">قوانین و مقررات</b>
        را می‌پذیرید.
      </p>
    </div>
  );
};

export default EmailDelivered;
