import clsx from "clsx";
import React from "react";

const UserName = ({ variant }) => {
  const isHeader = variant === "header";
  const iconId = isHeader ? "icon-User" : "icon-UserGreen";

  return (
    <div className="flex flex-row items-center justify-center">
      <p
        className={clsx(
          "leading-oneAndAlmostHalf mr-2 text-base font-medium",
          "md:mr-4 md:text-xl",
          "xl:mr-[10px]",
          !isHeader && "text-primaryWhite",
        )}
      >
        Irina
      </p>
      <div
        className={clsx(
          "flex h-[36px] w-[36px] flex-row items-center justify-center rounded-full bg-primaryGreen",
          !isHeader && "bg-primaryWhite",
          "md:h-[48px] md:w-[48px]",
        )}
      >
        <svg
          className={clsx("h-[14px] w-[14px]", "md:h-[16px] md:w-[16px]")}
          aria-hidden="true"
          focusable="false"
        >
          <use href={`/public/icons/sprite.svg#${iconId}`} />
        </svg>
      </div>
    </div>
  );
};

export default UserName;
