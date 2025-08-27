import HamburgerBarsIcon from "@/assets/HamburgurBars.svg";
import UserIcon from "@/assets/User.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-900 w-full h-header flex items-center justify-between py-5.5 px-3.25">
      <Image src={HamburgerBarsIcon} alt="hamburger bars" />
      <Image src={UserIcon} alt="user icon" />
    </header>
  );
};

export default Header;
