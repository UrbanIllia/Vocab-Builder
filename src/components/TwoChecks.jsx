import clsx from "clsx";

const TwoChecks = ({ onChange }) => {
  return (
    <div
      className={clsx(
        "absolute left-0 top-[116px] flex items-center justify-center gap-4",
        "md:left-[452px] md:top-[14px]",
      )}
    >
      <label className="group flex cursor-pointer flex-row items-center justify-center gap-2">
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
          )}
        >
          <span className="h-[10px] w-[10px] rounded-full group-has-[input:checked]:bg-primaryGreen"></span>
        </span>
        <span className="text-xs font-normal text-primaryBlack">Regular</span>
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
          )}
        >
          <span className="h-[10px] w-[10px] rounded-full group-has-[input:checked]:bg-primaryGreen"></span>
        </span>
        <span className="text-xs font-normal text-primaryBlack">Irregular</span>
      </label>
    </div>
  );
};

export default TwoChecks;
