import clsx from "clsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DashboardSelect from "./DashboardSelect";
import { useSelector } from "react-redux";
import { selectCategories } from "../redux/category/selectorsCat";
import { validationSchemaAddWord } from "../validations/schemas";
import TwoChecks from "./TwoChecks";

const AddWordForm = ({ initialValues, handleSubmitForm, onCancel }) => {
  const options = useSelector(selectCategories);

  const handleSubmit = (values, { resetForm }) => {
    handleSubmitForm(values);
    console.log("handleSubmit", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchemaAddWord}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="w-full">
          <label className="relative">
            <DashboardSelect
              name="category"
              value={values.category}
              options={options}
              variant="modal"
              placeholder="Categories"
              onChange={(value) => {
                setFieldValue("category", value);
              }}
            />
            <ErrorMessage
              name="category"
              component="div"
              className="absolute bottom-1 left-0 z-50 bg-primaryGreen text-xs text-red-700"
            />
            {values.category === "verb" && (
              <div className="absolute bottom-[-48px] left-0 flex flex-col items-start gap-2">
                <TwoChecks
                  variant="modal"
                  onChange={(val) => {
                    setFieldValue("isIrregular", val);
                    // handleLiveChange({ ...values, isIrregular: val });
                  }}
                />
                {values.isIrregular === true && (
                  <p className="text-[10px] font-normal leading-onePointTwo text-primaryWhite">
                    Such data must be entered in the format I form-II form-III
                    form.
                  </p>
                )}
              </div>
            )}
          </label>

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <label className="relative mb-5 mt-[58px] flex flex-col gap-[13px] md:mt-[70px] md:flex-row">
            <div className="order-1 flex flex-row items-center gap-2 md:order-2">
              <svg aria-hidden="true" focusable="false" className="h-7 w-7">
                <use href="/public/icons/sprite.svg#icon-ukraine" />
              </svg>
              <span
                className={clsx(
                  "text-sm font-medium text-primaryWhite",
                  "md:text-base md:leading-oneAndHalf",
                )}
              >
                Ukrainian
              </span>
            </div>

            <Field
              type="text"
              name="ua"
              placeholder="Працювати"
              className={clsx(
                "order-2 w-full placeholder:text-base placeholder:font-medium placeholder:leading-oneAndHalf placeholder:text-primaryWhite md:order-1 md:max-w-[354px]",
                "rounded-[15px] border border-lightWhite bg-transparent px-6 py-3 text-base font-medium leading-oneAndHalf text-primaryWhite outline-none transition hover:border-primaryWhite",
                errors.ua && touched.ua && "border border-red-700",
              )}
            />
            <ErrorMessage
              component="div"
              name="ua"
              className="absolute bottom-[-8px] left-0 z-50 bg-primaryGreen text-xs text-red-700"
            />
          </label>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <label className="relative mb-8 flex flex-col gap-[13px] md:flex-row">
            <div className="order-1 flex flex-row items-center gap-2 md:order-2">
              <svg aria-hidden="true" focusable="false" className="h-7 w-7">
                <use href="/public/icons/sprite.svg#icon-united-kingdom" />
              </svg>
              <span
                className={clsx(
                  "text-sm font-medium text-primaryWhite",
                  "md:text-base md:leading-oneAndHalf",
                )}
              >
                English
              </span>
            </div>
            <Field
              type="text"
              name="en"
              placeholder="Work"
              className={clsx(
                "order-2 w-full placeholder:text-base placeholder:font-medium placeholder:leading-oneAndHalf placeholder:text-primaryWhite md:order-1 md:max-w-[354px]",
                "rounded-[15px] border border-lightWhite bg-transparent px-6 py-3 text-base font-medium leading-oneAndHalf text-primaryWhite outline-none transition hover:border-primaryWhite",
                errors.en && touched.en && "border border-red-700",
              )}
            />
            <ErrorMessage
              component="div"
              name="en"
              className="absolute bottom-[-8px] left-0 z-50 bg-primaryGreen text-xs text-red-700"
            />
          </label>
          <div className="flex flex-row gap-2 md:gap-[10px]">
            <button
              type="submit"
              className={clsx(
                "h-[48px] w-full max-w-[159px] rounded-[30px] bg-primaryWhite text-base font-bold leading-oneAndHalf text-primaryBlack transition hover:scale-90 hover:text-primaryGreen",
                "md:h-[56px] md:max-w-[245px] md:text-lg",
              )}
            >
              Add
            </button>
            <button
              type="button"
              onClick={onCancel}
              className={clsx(
                "h-[48px] w-full max-w-[145px] rounded-[30px] border border-primaryWhite/40 bg-primaryGreen text-base font-bold leading-oneAndHalf text-primaryWhite transition hover:scale-90 hover:bg-primaryWhite hover:text-primaryBlack",
                "md:h-[56px] md:max-w-[245px] md:text-lg",
              )}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddWordForm;
