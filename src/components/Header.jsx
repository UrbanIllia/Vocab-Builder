import clsx from "clsx";
import { useState } from "react";
import UserBar from "./UserBar";
import Logo from "./Logo";
import UserNav from "./UserNav";

const Header = () => {
  const [isLogged, setIsLogged] = useState(true);

  const handleOpenModal = () => {};
  return (
    <header
      className={clsx(
        "flex w-full flex-row items-center justify-between bg-secondaryWhite px-4 py-4",
        "md:px-8 md:py-6",
        "xl:px-[100px]",
      )}
    >
      <Logo />
      {isLogged && (
        <div className="flex flex-row items-center justify-between gap-[257px]">
          <div className="hidden xl:flex">
            <UserNav variant="header" />
          </div>

          <UserBar isOpen={handleOpenModal} />
        </div>
      )}
    </header>
  );
};

export default Header;
