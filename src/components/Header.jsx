import clsx from "clsx";

import UserBar from "./UserBar";
import Logo from "./Logo";
import UserNav from "./UserNav";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectorsAuth";

const Header = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
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
      {isLoggedIn && (
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
