import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex flex-row items-center justify-center gap-4">
      <svg
        className="h-[36px] w-[36px] md:h-[40px] md:w-[40px]"
        aria-hidden="true"
        focusable="false"
      >
        <use href="/icons/sprite.svg#icon-Craftwork" />
      </svg>
      <p
        className={clsx(
          "text-[18px] font-semibold leading-oneAndThird text-primaryBlack",
          "md:text-[22px] md:leading-oneAndAlmostHalf",
        )}
      >
        VocabBuilder
      </p>
    </Link>
  );
};

export default Logo;
