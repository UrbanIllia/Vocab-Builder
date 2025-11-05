import clsx from "clsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { editWordSchema } from "../validations/schemas";

const EditWordForm = ({ toggleModalEdit, row, onPatch }) => {
  const initialState = {
    en: `${row.original.en}`,
    ua: `${row.original.ua}`,
    category: `${row.original.category}`,
    ...(row.original.isIrregular !== undefined && {
      isIrregular: row.original.isIrregular,
    }),
  };

  const handleSubmitForm = (values) => {
    onPatch(row.original._id, values);
    // console.log("handleSubmitForm", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmitForm}
        validationSchema={editWordSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="flex flex-col">
              <label className="relative mb-5 flex flex-col gap-2 md:flex-row md:gap-8">
                <div className="order-1 flex flex-row items-center gap-2 md:order-2">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-7 w-7 md:h-8 md:w-8"
                  >
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
                  className={clsx(
                    "order-2 w-full placeholder:text-base placeholder:font-medium placeholder:leading-oneAndHalf placeholder:text-primaryWhite focus:placeholder-transparent md:order-1 md:max-w-[354px]",
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
              <label className="relative mb-8 flex flex-col gap-2 md:flex-row md:gap-8">
                <div className="order-1 flex flex-row items-center gap-2 md:order-2">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-7 w-7 md:h-8 md:w-8"
                  >
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
                  // value={row.original.en}
                  // placeholder="Work"
                  className={clsx(
                    "order-2 w-full placeholder:text-base placeholder:font-medium placeholder:leading-oneAndHalf placeholder:text-primaryWhite focus:placeholder-transparent md:order-1 md:max-w-[354px]",
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
              <div>
                <div className="flex flex-row gap-2 md:gap-[10px]">
                  <button
                    type="submit"
                    className={clsx(
                      "h-[48px] w-full max-w-[159px] rounded-[30px] bg-primaryWhite text-base font-bold leading-oneAndHalf text-primaryBlack transition hover:scale-90 hover:text-primaryGreen",
                      "md:h-[56px] md:max-w-[245px] md:text-lg",
                    )}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={toggleModalEdit}
                    className={clsx(
                      "h-[48px] w-full max-w-[145px] rounded-[30px] border border-primaryWhite/40 bg-primaryGreen text-base font-bold leading-oneAndHalf text-primaryWhite transition hover:scale-90 hover:bg-primaryWhite hover:text-primaryBlack",
                      "md:h-[56px] md:max-w-[245px] md:text-lg",
                    )}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditWordForm;
