import clsx from "clsx";

const LanguageIcon = ({ variant }) => {
  return (
    <div className="absolute bottom-[18px] right-[22px] flex flex-row items-center gap-2 md:bottom-auto md:top-[22px]">
      {variant === "en" ? (
        <svg
          aria-hidden="true"
          focusable="false"
          className="h-7 w-7 md:h-8 md:w-8"
        >
          <use href="/public/icons/sprite.svg#icon-united-kingdom" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          focusable="false"
          className="h-7 w-7 md:h-8 md:w-8"
        >
          <use href="/public/icons/sprite.svg#icon-ukraine" />
        </svg>
      )}

      <span
        className={clsx(
          "text-sm font-medium text-lightSecondGray",
          "md:text-base md:leading-oneAndHalf",
        )}
      >
        {variant === "en" ? "English" : "Ukrainian"}
      </span>
    </div>
  );
};

export default LanguageIcon;
