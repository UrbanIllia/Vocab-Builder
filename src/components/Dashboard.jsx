// import clsx from "clsx";
// import { Field, Form, Formik } from "formik";
// import debounce from "lodash.debounce";
// import { useMemo } from "react";

// const options = [
//   { value: "1", label: "Option 1" },
//   { value: "2", label: "Option 2" },
//   { value: "3", label: "Option 3" },
//   { value: "4", label: "Option 4" },
//   { value: "5", label: "Option 5" },
//   { value: "6", label: "Option 6" },
//   { value: "7", label: "Option 7" },
// ];

// const initialValues = {
//   filter: "",
//   category: "",
// };

// const Dashboard = () => {
//   const handleLiveChange = useMemo(
//     () =>
//       debounce((values) => {
//         console.log("📡 Sending request with values:", values);
//       }, 300),
//     [],
//   );
//   return (
//     <div>
//       <div
//         className={clsx(
//           "flex w-full flex-col gap-2",
//           "md:w-[446px] md:flex-row",
//         )}
//       >
//         <Formik initialValues={initialValues} onSubmit={() => {}}>
//           {({ values, handleChange }) => (
//             <Form
//               className={clsx(
//                 "flex w-full flex-col gap-2",
//                 "md:w-[446px] md:flex-row",
//               )}
//             >
//               {/* ----------- Input ----------- */}
//               <label className="relative">
//                 <Field
//                   type="text"
//                   name="filter"
//                   className={clsx(
//                     "h-[48px] w-full max-w-[343px] rounded-[15px] border border-lightSecondGray/10 px-6 py-3 text-base font-medium",
//                     "leading-oneAndHalf text-primaryBlack outline-none placeholder:font-medium placeholder:text-primaryBlack",
//                     "md:w-[274px]",
//                   )}
//                   placeholder="Find the word"
//                   onChange={(event) => {
//                     handleChange(event);
//                     handleLiveChange({ ...values, filter: event.target.value });
//                   }}
//                 />
//                 <svg
//                   className={clsx(
//                     "h-[20px] w-[20px]",
//                     "absolute right-[20px] top-1/2 -translate-y-1/2 fill-none stroke-lightSecondGray",
//                   )}
//                   aria-hidden="true"
//                   focusable="false"
//                 >
//                   <use href="/public/icons/sprite.svg#icon-search" />
//                 </svg>
//               </label>

//               {/* ----------- Select ----------- */}
//               <label>
//                 <Field
//                   name="category"
//                   as="select"
//                   className={clsx(
//                     "h-[48px] w-full appearance-none rounded-[15px] border border-lightSecondGray/10 px-6 py-3 outline-none",
//                     "text-base font-medium leading-oneAndHalf text-primaryBlack",
//                     "md:w-[164px]",
//                   )}
//                   onChange={(event) => {
//                     handleChange(event);
//                     handleLiveChange({
//                       ...values,
//                       category: event.target.value,
//                     });
//                   }}
//                 >
//                   <option value="" disabled>
//                     Categories
//                   </option>
//                   {options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.value}
//                     </option>
//                   ))}
//                 </Field>
//               </label>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import clsx from "clsx";
// import { Field, Form, Formik } from "formik";
// import debounce from "lodash.debounce";
// import { useMemo } from "react";
// import Select, { components } from "react-select";

// // === Custom Dropdown Icon ===
// const DropdownIndicator = (props) => {
//   const { menuIsOpen } = props.selectProps;
//   return (
//     <components.DropdownIndicator {...props}>
//       <svg
//         className={clsx(
//           "h-[20px] w-[20px] stroke-primaryBlack transition-transform duration-300",
//           menuIsOpen && "rotate-180",
//         )}
//       >
//         <use href="/public/icons/sprite.svg#icon-array" />
//       </svg>
//     </components.DropdownIndicator>
//   );
// };

// const options = [
//   { value: "1", label: "Option 1" },
//   { value: "2", label: "Option 2" },
//   { value: "3", label: "Option 3" },
//   { value: "4", label: "Option 4" },
//   { value: "5", label: "Option 5" },
//   { value: "6", label: "Option 6" },
//   { value: "7", label: "Option 7" },
// ];

// const initialValues = {
//   filter: "",
//   category: "",
// };

// const Dashboard = () => {
//   const handleLiveChange = useMemo(
//     () =>
//       debounce((values) => {
//         console.log("📡 Sending request with values:", values);
//       }, 300),
//     [],
//   );

//   return (
//     <div className="flex w-full flex-col gap-2 md:w-[446px] md:flex-row">
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         {({ values, handleChange, setFieldValue }) => (
//           <Form
//             className={clsx(
//               "flex w-full flex-col gap-2",
//               "md:w-[446px] md:flex-row",
//             )}
//           >
//             {/* -------- Input -------- */}
//             <label className="relative">
//               <Field
//                 type="text"
//                 name="filter"
//                 className={clsx(
//                   "h-[48px] w-full max-w-[343px] rounded-[15px] border border-lightSecondGray/10 px-6 py-3 text-base font-medium",
//                   "leading-oneAndHalf text-primaryBlack outline-none placeholder:font-medium placeholder:text-primaryBlack",
//                   "md:w-[274px]",
//                 )}
//                 placeholder="Find the word"
//                 onChange={(event) => {
//                   handleChange(event);
//                   handleLiveChange({ ...values, filter: event.target.value });
//                 }}
//               />
//               <svg
//                 className={clsx(
//                   "h-[20px] w-[20px]",
//                   "absolute right-[20px] top-1/2 -translate-y-1/2 fill-none stroke-lightSecondGray",
//                 )}
//               >
//                 <use href="/public/icons/sprite.svg#icon-search" />
//               </svg>
//             </label>

//             {/* -------- Select -------- */}
//             <div className="w-full md:w-[164px]">
//               <Select
//                 name="category"
//                 inputId="category-select"
//                 options={options}
//                 value={
//                   options.find((opt) => opt.value === values.category) || null
//                 }
//                 onChange={(selected) => {
//                   setFieldValue("category", selected?.value || "");
//                   handleLiveChange({
//                     ...values,
//                     category: selected?.value || "",
//                   });
//                 }}
//                 placeholder="Categories"
//                 components={{
//                   DropdownIndicator,
//                   IndicatorSeparator: () => null,
//                 }}
//                 classNames={{
//                   control: ({ isFocused }) =>
//                     clsx(
//                       "rounded-[15px] border transition-all duration-300 px-2",
//                       "min-h-[48px] bg-white text-primaryBlack font-medium",
//                       isFocused
//                         ? "border-primaryGreen shadow-[0_0_0_2px_rgba(133,170,159,0.2)]"
//                         : "border-lightSecondGray/10 hover:border-primaryGreen",
//                     ),
//                   valueContainer: () => "px-4 py-2",
//                   placeholder: () =>
//                     "text-primaryBlack text-base font-medium opacity-70",
//                   singleValue: () =>
//                     "text-base text-primaryBlack font-medium leading-oneAndHalf",
//                   menu: () =>
//                     "mt-2 rounded-[15px] border border-lightSecondGray/20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
//                   option: ({ isFocused, isSelected }) =>
//                     clsx(
//                       "px-4 py-2 cursor-pointer text-base font-medium",
//                       isSelected
//                         ? "bg-primaryGreen text-white"
//                         : isFocused
//                           ? "bg-secondaryGreen/20 text-primaryBlack"
//                           : "text-primaryBlack",
//                     ),
//                 }}
//               />
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Dashboard;

import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import debounce from "lodash.debounce";
import { useMemo } from "react";
import DashboardSelect from "./DashboardSelect";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
  { value: "5", label: "Option 5" },
  { value: "6", label: "Option 6" },
  { value: "7", label: "Option 7" },
];

const initialValues = {
  filter: "",
  category: "",
};

const Dashboard = () => {
  const handleLiveChange = useMemo(
    () =>
      debounce((values) => {
        console.log("📡 Sending request with values:", values);
      }, 300),
    [],
  );

  return (
    <div className="flex w-full flex-col gap-2 md:w-[446px] md:flex-row">
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values, handleChange, setFieldValue }) => (
          <Form
            className={clsx(
              "flex w-full flex-col gap-2",
              "md:w-[446px] md:flex-row",
            )}
          >
            {/* -------- Input -------- */}
            <label className="relative">
              <Field
                type="text"
                name="filter"
                className={clsx(
                  "h-[48px] w-full max-w-[343px] rounded-[15px] border border-lightSecondGray/10 px-6 py-3 text-base font-medium",
                  "leading-oneAndHalf text-primaryBlack outline-none placeholder:font-medium placeholder:text-primaryBlack",
                  "md:w-[274px]",
                )}
                placeholder="Find the word"
                onChange={(event) => {
                  handleChange(event);
                  handleLiveChange({ ...values, filter: event.target.value });
                }}
              />
              <svg
                className={clsx(
                  "h-[20px] w-[20px]",
                  "absolute right-[20px] top-1/2 -translate-y-1/2 fill-none stroke-lightSecondGray",
                )}
              >
                <use href="/public/icons/sprite.svg#icon-search" />
              </svg>
            </label>

            {/* -------- Select -------- */}
            <div className="w-full md:w-[164px]">
              <DashboardSelect
                value={values.category}
                onChange={(val) => {
                  setFieldValue("category", val);
                  handleLiveChange({ ...values, category: val });
                }}
                options={options}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Dashboard;
