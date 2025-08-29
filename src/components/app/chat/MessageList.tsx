import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { UserRoles } from "@/constants/enumLikes";
import UserMessage from "./UserMessage";
import AdminMessage from "@/components/app/chat/AdminMessage";

const messages = [
  { role: UserRoles.USER, text: "تست الکل", key: "0" },
  {
    role: UserRoles.ADMIN,
    text:
      "تست الکل: اهمیت، مراحل و روش‌ها\n" +
      "\n" +
      "تست الکل فرآیندی است برای اندازه‌گیری میزان الکل موجود در خون یا بدن فرد، که غالباً برای اهداف پزشکی، قانونی یا شخصی انجام می‌شود. این تست‌ها به منظور ارزیابی سطح مسمومیت یا تشخیص مصرف الکل توسط فرد، طراحی و اجرا می‌شوند.\n" +
      "\n" +
      "موارد استفاده از تست الکل\n" +
      "\n" +
      "کنترل رانندگی:\n" +
      "اجرای قانون برای جلوگیری از رانندگی در حالت مستی.\n" +
      "ارزیابی پزشکی:\n" +
      "بررسی اثرات مصرف زیاد الکل بر بدن فرد، مانند مسمومیت الکلی.\n" +
      "اهداف شغلی:\n" +
      "برخی مشاغل حساس (مثل خلبانان) نیاز به تست دوره‌ای الکل دارند.\n" +
      "دلایل شخصی:\n" +
      "برای ارزیابی اثرات مصرف الکل توسط خود فرد.",
    key: "1",
    imagesCount: 3,
  },
  { role: UserRoles.USER, text: "تست الکل", key: "" },
  {
    role: UserRoles.ADMIN,
    text:
      "تست الکل: اهمیت، مراحل و روش‌ها\n" +
      "\n" +
      "تست الکل فرآیندی است برای اندازه‌گیری میزان الکل موجود در خون یا بدن فرد، که غالباً برای اهداف پزشکی، قانونی یا شخصی انجام می‌شود. این تست‌ها به منظور ارزیابی سطح مسمومیت یا تشخیص مصرف الکل توسط فرد، طراحی و اجرا می‌شوند.\n" +
      "\n" +
      "موارد استفاده از تست الکل\n" +
      "\n" +
      "کنترل رانندگی:\n" +
      "اجرای قانون برای جلوگیری از رانندگی در حالت مستی.\n" +
      "ارزیابی پزشکی:\n" +
      "بررسی اثرات مصرف زیاد الکل بر بدن فرد، مانند مسمومیت الکلی.\n" +
      "اهداف شغلی:\n" +
      "برخی مشاغل حساس (مثل خلبانان) نیاز به تست دوره‌ای الکل دارند.\n" +
      "دلایل شخصی:\n" +
      "برای ارزیابی اثرات مصرف الکل توسط خود فرد.",
    key: "2",
    imagesCount: 2,
  },
];

const MessageList = () => {
  const MessageComponentsMap = useMemo(
    () => ({
      [UserRoles.USER]: UserMessage,
      [UserRoles.ADMIN]: AdminMessage,
    }),
    [],
  );

  return (
    <div className="flex flex-col gap-7.5 pr-6.25 pl-5">
      {messages.map((message) => {
        const MessageComp = MessageComponentsMap[message.role];
        return (
          <div
            key={message.key}
            className={cn(
              "flex flex-col gap-1.5 w-full",
              message.role === "admin" ? "items-end" : "items-start",
            )}
          >
            <MessageComp message={message} />
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
