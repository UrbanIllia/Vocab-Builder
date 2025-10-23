import clsx from "clsx";

const TwoChecks = ({ onChange, variant }) => {
  const isModal = variant === "modal";
  return (
    <div className="flex items-center justify-center gap-4">
      <label
        className={clsx(
          "group flex cursor-pointer flex-row items-center justify-center gap-2",
        )}
      >
        <input
          type="radio"
          name="verb"
          value="123"
          className="group/verb peer hidden"
          onChange={() => onChange(false)}
        />
        <span
          className={clsx(
            "flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-lightSecondGray/20",
            "group-has-[input:checked]:border-primaryGreen",
            isModal &&
              "border-primaryWhite group-has-[input:checked]:border-primaryWhite",
          )}
        >
          <span
            className={clsx(
              "h-[10px] w-[10px] rounded-full group-has-[input:checked]:bg-primaryGreen",
              isModal &&
                "border-primaryWhite group-has-[input:checked]:bg-primaryWhite",
            )}
          ></span>
        </span>
        <span
          className={clsx(
            "text-xs font-normal text-primaryBlack",
            isModal && "text-primaryWhite",
          )}
        >
          Regular
        </span>
      </label>
      <label className="group flex cursor-pointer flex-row items-center justify-center gap-2">
        <input
          type="radio"
          name="verb"
          value="345"
          className="group/verb peer hidden"
          onChange={() => onChange(true)}
        />
        <span
          className={clsx(
            "flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-lightSecondGray/20",
            "group-has-[input:checked]:border-primaryGreen",
            isModal &&
              "border-primaryWhite group-has-[input:checked]:border-primaryWhite",
          )}
        >
          <span
            className={clsx(
              "h-[10px] w-[10px] rounded-full group-has-[input:checked]:bg-primaryGreen",
              isModal &&
                "border-primaryWhite group-has-[input:checked]:bg-primaryWhite",
            )}
          ></span>
        </span>
        <span
          className={clsx(
            "text-xs font-normal text-primaryBlack",
            isModal && "text-primaryWhite",
          )}
        >
          Irregular
        </span>
      </label>
    </div>
  );
};

export default TwoChecks;
