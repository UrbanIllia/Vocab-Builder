import clsx from "clsx";
import BurgerModal from "./BurgerModal";
import UserName from "./UserName";
import UserLogOut from "./UserLogOut";
import IconBurger from "./IconBurger";
import { useDispatch, useSelector } from "react-redux";
import { isOpenBurgerMenuModal } from "../redux/ui/uiSelectors";
import { closeBurgerMenuOpen, openBurgerMenuOpen } from "../redux/ui/uiSlice";

const UserBar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpenBurgerMenuModal);

  const handleOpenModal = () => {
    dispatch(openBurgerMenuOpen());
  };
  const handleCloseModal = () => {
    dispatch(closeBurgerMenuOpen());
  };

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
      <IconBurger handleOpenModal={handleOpenModal} />

      {isOpen && <BurgerModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default UserBar;
