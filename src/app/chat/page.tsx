import Prompt from "@/components/app/chat/Promp";
import MessageList from "@/components/app/chat/MessageList";

const Chat = () => {
  return (
    <div className="flex flex-col h-full pt-4">
      <MessageList />
      {/*<Splash />*/}
      <Prompt />
      <p className="hidden lg:block text-xs text-[#B5B5B5] absolute left-1/2 bottom-4 -translate-x-1/2 w-max">
        مدل‌های هوش‌مصنوعی می‌توانند اشتباه کنند، صحت اطلاعات مهم را بررسی کنید
        و از وارد کردن اطلاعات حساس بپرهیزید.
      </p>
    </div>
  );
};

export default Chat;
