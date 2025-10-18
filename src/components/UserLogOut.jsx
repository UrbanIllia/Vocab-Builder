import clsx from "clsx";

const UserLogOut = ({ variant }) => {
  const isHeader = variant === "header";

  return (
    <div
      className={clsx(
        isHeader && "hidden hover:scale-110",
        !isHeader && "mt-7 hover:translate-x-6",
        "flex flex-row items-center justify-start gap-[6px] transition duration-300",
        "xl:flex",
      )}
    >
      <button
        className={clsx(
          !isHeader && "text-sm text-primaryWhite",
          "leading-oneAndAlmostHalf flex items-center justify-center text-base font-medium text-primaryBlack",
        )}
      >
        Log out
      </button>
      <svg
        aria-hidden="true"
        focusable="false"
        className={clsx(
          "h-4 w-4 fill-none",
          isHeader ? "stroke-primaryBlack" : "stroke-primaryWhite",
        )}
      >
        <use href="/public/icons/sprite.svg#icon-arrow-right"></use>
      </svg>
    </div>
  );
};

export default UserLogOut;
