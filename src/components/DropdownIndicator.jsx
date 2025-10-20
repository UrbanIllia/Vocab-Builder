import { components } from "react-select";
import clsx from "clsx";

export const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <svg
        className={clsx(
          "fil-primaryBlack h-[20px] w-[20px] transition-transform duration-300",
          menuIsOpen && "rotate-180",
        )}
      >
        <use href="/public/icons/sprite.svg#icon-array" />
      </svg>
    </components.DropdownIndicator>
  );
};
