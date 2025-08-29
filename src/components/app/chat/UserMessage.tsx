import { IMessage } from "@/types/entities";
import IconWrapper from "@/components/common/IconWrapper";
import EditMessage from "@/assets/chat/EditMessage.svg";
import CopyMessage from "@/assets/chat/CopyMessage.svg";

const UserMessages = ({ message }: { message: IMessage }) => {
  return (
    <>
      <div className="text-gray-0 rounded-full bg-gray-700 p-2">
        {message.text}
      </div>
      <div className="flex items-center gap-2.5">
        <IconWrapper alt="Edit Message" src={EditMessage} />
        <IconWrapper alt="Copy Message" src={CopyMessage} />
      </div>
    </>
  );
};

export default UserMessages;
