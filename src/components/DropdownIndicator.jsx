import { components } from "react-select";
import clsx from "clsx";
import { IoChevronDown } from "react-icons/io5";

export const DropdownIndicator = ({ selectProps, isModal, ...props }) => {
  const { menuIsOpen } = selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <IoChevronDown
        className={clsx(
          "h-[20px] w-[20px] transition-transform duration-300",
          isModal ? "stroke-primaryWhite" : "stroke-primaryBlack", // Используем primaryBlack
          menuIsOpen && "rotate-180",
        )}
      />
    </components.DropdownIndicator>
  );
};
