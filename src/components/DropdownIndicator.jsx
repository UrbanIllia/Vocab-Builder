import { components } from "react-select";
import clsx from "clsx";
import { IoChevronDown } from "react-icons/io5";

export const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <IoChevronDown
        className={clsx(
          "fil-primaryBlack h-[20px] w-[20px] transition-transform duration-300",
          menuIsOpen && "rotate-180",
        )}
      />
    </components.DropdownIndicator>
  );
};
