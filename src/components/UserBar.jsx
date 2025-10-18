import clsx from "clsx";
import { useState } from "react";
import BurgerModal from "./BurgerModal";
import UserName from "./UserName";
import UserLogOut from "./UserLogOut";
import IconBurger from "./IconBurger";

const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-center gap-2",
        "md:gap-7",
        "xl:gap-4",
      )}
    >
      <UserName variant="header" />
      <UserLogOut variant="header" />
      <IconBurger setIsOpen={setIsOpen} />

      {isOpen && <BurgerModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default UserBar;
