import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export function WhiteButton({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button className={className}>{children}</Button>
    </div>
  );
}

export default WhiteButton;
