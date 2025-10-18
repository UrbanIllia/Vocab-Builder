import clsx from "clsx";

const PasswordEye = ({ isOpen, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isOpen}
      aria-label={isOpen ? "Hide password" : "Show password"}
      className="absolute right-[18px] top-[19px] inline-flex items-center justify-center"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className={clsx("h-5 w-5 cursor-pointer fill-none stroke-primaryBlack")}
      >
        <use
          href={`/public/icons/sprite.svg#${isOpen ? "icon-eye" : "icon-eye-off"}`}
        ></use>
      </svg>
    </button>
  );
};

export default PasswordEye;
