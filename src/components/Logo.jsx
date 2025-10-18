import clsx from "clsx";
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <svg
        className="h-[36px] w-[36px] md:h-[40px] md:w-[40px]"
        aria-hidden="true"
        focusable="false"
      >
        <use href="/public/icons/sprite.svg#icon-Craftwork" />
      </svg>
      <p
        className={clsx(
          "text-[18px] font-semibold leading-oneAndThird text-primaryBlack",
          "md:leading-oneAndAlmostHalf md:text-[22px]",
        )}
      >
        VocabBuilder
      </p>
    </div>
  );
};

export default Logo;
