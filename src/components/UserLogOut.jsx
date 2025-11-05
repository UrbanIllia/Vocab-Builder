import clsx from "clsx";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/auth/operationsAuth";
import { toast } from "react-toastify";

const UserLogOut = ({ variant }) => {
  const isHeader = variant === "header";
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(
        isHeader && "hidden hover:scale-110",
        !isHeader && "mt-7 hover:translate-x-6",
        "flex flex-row items-center justify-start transition duration-300",
        "xl:flex",
      )}
    >
      <button
        className={clsx(
          !isHeader && "text-sm text-primaryWhite",
          "flex flex-row items-center justify-center gap-[6px] text-base font-medium leading-oneAndAlmostHalf text-primaryBlack",
        )}
        onClick={() =>
          dispatch(logoutUserThunk())
            .unwrap()
            .then(toast.success("Logout is success"))
        }
      >
        <span>Log out </span>
        <svg
          aria-hidden="true"
          focusable="false"
          className={clsx(
            "h-4 w-4 fill-none",
            isHeader ? "stroke-primaryBlack" : "stroke-primaryWhite",
          )}
        >
          <use href="/icons/sprite.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default UserLogOut;
