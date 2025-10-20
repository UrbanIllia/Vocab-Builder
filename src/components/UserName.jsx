import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectorsAuth";

const UserName = ({ variant }) => {
  const isHeader = variant === "header";
  const iconId = isHeader ? "icon-User" : "icon-UserGreen";
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-row items-center justify-center">
      <p
        className={clsx(
          "mr-2 text-base font-medium leading-oneAndAlmostHalf",
          "md:mr-4 md:text-xl",
          "xl:mr-[10px]",
          !isHeader && "text-primaryWhite",
        )}
      >
        {user.name}
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
