import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface WhiteButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function WhiteButton({
  children,
  className,
  onClick,
}: Readonly<WhiteButtonProps>) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button onClick={onClick} className={className}>
        {children}
      </Button>
    </div>
  );
}

export default WhiteButton;
