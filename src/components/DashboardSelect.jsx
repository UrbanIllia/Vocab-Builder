// import Select from "react-select";
// import clsx from "clsx";
// import { DropdownIndicator } from "./DropdownIndicator";

// export const DashboardSelect = ({ value, onChange, options }) => {
//   return (
//     <Select
//       name="category"
//       inputId="category-select"
//       options={options}
//       value={options.find((opt) => opt.value === value) || null}
//       onChange={(selected) => onChange(selected?.value || "")}
//       placeholder="Categories"
//       menuPortalTarget={document.body}
//       components={{
//         DropdownIndicator,
//         IndicatorSeparator: () => null,
//       }}
//       styles={{
//         menuPortal: (base) => ({ ...base, zIndex: 9999 }),
//       }}
//       classNames={{
//         control: ({ isFocused }) =>
//           clsx(
//             "rounded-[15px] border transition-all duration-300 px-2",
//             "min-h-[48px] bg-white text-primaryBlack font-medium",
//             isFocused
//               ? "border-primaryGreen shadow-[0_0_0_2px_rgba(133,170,159,0.2)]"
//               : "border-lightSecondGray/10 hover:border-primaryGreen",
//           ),
//         valueContainer: () => "px-4 py-2",
//         placeholder: () => "text-primaryBlack text-base font-medium opacity-70",
//         singleValue: () =>
//           "text-base text-primaryBlack font-medium leading-oneAndHalf",
//         menu: () =>
//           "mt-2 rounded-[15px] border border-lightSecondGray/20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] animate-fade-scale",
//         option: ({ isFocused, isSelected }) =>
//           clsx(
//             "px-4 py-2 cursor-pointer text-base font-medium transition-colors",
//             isSelected
//               ? "bg-primaryGreen text-white"
//               : isFocused
//                 ? "bg-secondaryGreen/20 text-primaryBlack"
//                 : "text-primaryBlack",
//           ),
//       }}
//     />
//   );
// };
import clsx from "clsx";
import Select from "react-select";
import { useFormikContext } from "formik";
import { DropdownIndicator } from "./DropdownIndicator";

// Предполагаемый компонент DropdownIndicator
// const DropdownIndicator = (props) => (
//   <svg
//     className={clsx(
//       "h-[16px] w-[16px] fill-none stroke-primaryBlack",
//       props.isFocused && "rotate-180",
//     )}
//     aria-hidden="true"
//   >
//     <use href="/icons/sprite.svg#icon-chevron-down" />
//   </svg>
// );

const DashboardSelect = ({ name, options, handleLiveChange }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <label className="relative block">
      <Select
        name={name}
        inputId={`${name}-select`}
        options={options}
        value={options.find((opt) => opt.value === values[name]) || null}
        onChange={(selected) => {
          const value = selected?.value || "";
          setFieldValue(name, value);
          if (handleLiveChange) {
            handleLiveChange({ ...values, [name]: value });
          }
        }}
        placeholder="Categories"
        menuPortalTarget={document.body}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          control: (base) => ({
            ...base,
            minHeight: "48px",
            width: "343px",
            borderRadius: "15px",
            border: `1px solid ${errors[name] && touched[name] ? "#B91C1C" : "rgba(133, 170, 159, 0.1)"}`,
            backgroundColor: "#FFFFFF",
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "1.5",
            color: "#1F1F1F",
            padding: "0 0.5rem",
            transition: "all 0.3s",
            boxShadow:
              errors[name] && touched[name]
                ? "0 0 0 2px rgba(185, 28, 28, 0.2)"
                : "none",
            "&:hover": {
              borderColor: "#85AA9F",
            },
            "@media (min-width: 768px)": {
              width: "164px",
            },
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "8px 16px",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#1F1F1F",
            opacity: 0.7,
            fontSize: "1rem",
            fontWeight: 500,
          }),
          singleValue: (base) => ({
            ...base,
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "1.5",
            color: "#1F1F1F",
          }),
          menu: (base) => ({
            ...base,
            marginTop: "8px",
            width: "343px",
            borderRadius: "15px",
            border: "1px solid rgba(133, 170, 159, 0.2)",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            "@media (min-width: 768px)": {
              width: "164px",
            },
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            padding: "8px 16px",
            fontSize: "1rem",
            fontWeight: 500,
            color: isSelected ? "#FFFFFF" : "#1F1F1F",
            backgroundColor: isSelected
              ? "#85AA9F"
              : isFocused
                ? "rgba(133, 170, 159, 0.2)"
                : "#FFFFFF",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }),
        }}
        classNames={{
          control: ({ isFocused }) =>
            clsx(
              "transition-all duration-300",
              isFocused && "shadow-[0_0_0_2px_rgba(133,170,159,0.2)]",
            ),
        }}
      />
      {errors[name] && touched[name] && (
        <div className="absolute bottom-0 left-0 z-10 text-red-700">
          {errors[name]}
        </div>
      )}
    </label>
  );
};

export default DashboardSelect;
