import clsx from "clsx";
import React from "react";

const IconBurger = ({ handleOpenModal }) => {
  return (
    <button
      type="button"
      onClick={handleOpenModal}
      className={clsx("flex items-center justify-center", "xl:hidden")}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className={clsx(
          "h-[22px] w-[32px] fill-none stroke-black",
          "md:h-[28px] md:w-[40px]",
        )}
      >
        <use href="/public/icons/sprite.svg#icon-Burger"></use>
      </svg>
    </button>
  );
};

export default IconBurger;
