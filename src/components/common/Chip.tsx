import { ReactElement } from "react";

const Chip = ({ icon, text }: { icon?: ReactElement; text: string }) => {
  return (
    <span className="w-max px-3 py-1.75 flex items-center gap-1 bg-gray-700 rounded-full">
      {text}
      {icon}
    </span>
  );
};

export default Chip;
