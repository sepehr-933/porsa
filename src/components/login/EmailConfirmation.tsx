import LoginInput from "@/components/formElements/LoginInput";

const EmailConfirmation = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-0 text-lg mb-7">آدرس ایمیل خودتون رو وارد کنید</p>
      <LoginInput
        inputClassName="text-end"
        className="mb-4"
        placeholder="آدرس ایمیل"
      />
      <p className="text-[8px] text-[#B5B5B5]">
        با ورود به پرسا ای آی، شما
        <b className="text-gray-0 px-1">قوانین و مقررات</b>
        را می‌پذیرید.
      </p>
    </div>
  );
};

export default EmailConfirmation;
