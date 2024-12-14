import Image from "next/image";
import logoImage from "@/public/img/logo.png";
import NavLinks from "./NavLinks";
import HeaderButtons from "./HeaderButtons";

export default function Header() {
  return (
    <header className="my-0 fixed top-0 left-0 w-full bg-white backdrop-blur-sm z-[999]">
      <nav className="border-b border-b-gray-200 h-16 flex items-center justify-between mx-4 mt-2 md:my-0">
        <div className="flex items-center">
          <div className="mr-4">
            <Image src={logoImage} alt="Logo" className="h-auto w-48" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <NavLinks />
          <HeaderButtons />
        </div>
      </nav>
    </header>
  );
}
