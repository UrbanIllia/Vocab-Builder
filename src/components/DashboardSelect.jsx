import Select from "react-select";
import clsx from "clsx";
import { DropdownIndicator } from "./DropdownIndicator";

const DashboardSelect = ({
  name = "select",
  options = [],
  value,
  onChange,
  placeholder = "",
  className = "",
  variant = "",
}) => {
  const normalizedOptions = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt,
  );
  const isModal = variant === "modal";
  return (
    <div className={clsx("relative", className)}>
      <Select
        inputId={`${name}-select`}
        name={name}
        options={normalizedOptions}
        value={normalizedOptions.find((opt) => opt.value === value) || null}
        onChange={(selected) => onChange?.(selected?.value || "")}
        placeholder={placeholder}
        unstyled
        menuPortalTarget={document.body}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 60 }),
        }}
        components={{
          DropdownIndicator: (props) => (
            <DropdownIndicator {...props} isModal={isModal} />
          ),
          IndicatorSeparator: () => null,
        }}
        classNames={{
          control: ({ isFocused }) =>
            clsx(
              `flex h-[48px] w-full cursor-pointer items-center rounded-[15px] border px-4 py-2 text-base font-medium transition-all duration-200  `,
              "md:max-w-[164px]",
              isFocused
                ? `border-primaryGreen shadow-[0_0_0_2px_rgba(133,170,159,0.2)] ${isModal && "border-lightWhite/50"}`
                : `border-lightSecondGray/10 hover:border-primaryGreen ${isModal && "border-lightWhite hover:border-lightWhite/50"}`,
            ),
          placeholder: () =>
            `text-primaryBlack ${isModal && "text-primaryWhite"}`,
          singleValue: () => "text-primaryBlack",
          menu: () =>
            "mt-2 rounded-[15px] border border-lightSecondGray/20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
          option: ({ isFocused, isSelected }) =>
            clsx(
              "cursor-pointer px-4 py-2 text-base font-medium transition-colors",
              isSelected
                ? "bg-primaryGreen text-white"
                : isFocused
                  ? `bg-secondaryGreen/20 text-primaryBlack `
                  : `text-primaryBlack `,
            ),
        }}
      />
    </div>
  );
};

export default DashboardSelect;
