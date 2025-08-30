"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/lib/shadcn/Dialog";
import IconWrapper from "@/components/common/IconWrapper";

import Logo from "@/assets/Logo.svg";

import MainLoginContent from "@/components/login/MainLoginContent";
import { useState } from "react";
import EmailConfirmation from "@/components/login/EmailConfirmation";
import { LoginSteps } from "@/types/shared-props";
import PhoneConfirmation from "@/components/login/PhoneConfirmation";

const LoginModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [loginStep, setLoginStep] = useState<LoginSteps>(0);

  const handleChangeStep = (step: LoginSteps) => () => {
    setLoginStep(step);
  };

  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 rounded-3xl px-8 py-9 w-[307px]">
        <DialogTitle className="flex flex-col items-center gap-2.5 mx-auto w-max mb-7">
          <IconWrapper alt="Logo" src={Logo} className="w-[71px] h-[73px]" />
          <p className="text-gray-0 text-lg">پرسا ای آی</p>
        </DialogTitle>
        {loginStep === 0 && (
          <MainLoginContent handleChangeLoginStep={handleChangeStep} />
        )}
        {loginStep === 1 && <EmailConfirmation />}
        {loginStep === 2 && <PhoneConfirmation />}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
