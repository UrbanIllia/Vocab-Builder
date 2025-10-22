import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import debounce from "lodash.debounce";
import { useEffect, useMemo } from "react";
import DashboardSelect from "./DashboardSelect";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../redux/category/operationsCat";
import TwoChecks from "./TwoChecks";
import { addDictionaryFilters } from "../redux/dictionaryFilters/sliceDicFilters";
import Statistics from "./Statistics";
import AddWordBtn from "./AddWordBtn";
import TrainWordBtn from "./TrainWordBtn";

const Dashboard = () => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.categories.categories);

  const { dictionaryFilters } = useSelector((state) => state.dictionaryFilters);
  console.log("dictionaryFilters", dictionaryFilters);
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const handleLiveChange = useMemo(
    () =>
      debounce((values) => {
        dispatch(addDictionaryFilters(values));
      }, 300),
    [dispatch],
  );

  return (
    <div className="flex flex-col items-start justify-center md:justify-between xl:flex-row xl:items-center">
      <div className="mb-[40px] flex w-full flex-col items-start gap-2 md:mb-[28px] md:w-[446px] md:flex-row md:items-center md:gap-[8px]">
        <Formik initialValues={dictionaryFilters} onSubmit={() => {}}>
          {({ values, handleChange, setFieldValue }) => (
            <Form
              className={clsx(
                "relative flex w-full flex-col gap-2",
                // 🩵 на десктопе всё в ряд и выровнено
                "md:h-[48px] md:flex-row md:items-center md:gap-[8px]",
              )}
            >
              {/* Input */}
              <label className="relative md:h-[48px]">
                <Field
                  type="text"
                  name="filter"
                  className={clsx(
                    "h-[48px] w-full max-w-[343px] rounded-[15px] border border-lightSecondGray/10 bg-secondaryWhite px-6 py-3 text-base font-medium",
                    "leading-oneAndHalf text-primaryBlack outline-none transition placeholder:font-medium placeholder:text-primaryBlack hover:border-primaryGreen hover:shadow-[0_0_0_2px_rgba(133,170,159,0.2)] active:border-primaryGreen active:shadow-[0_0_0_2px_rgba(133,170,159,0.2)]",
                    "md:w-[274px]",
                  )}
                  placeholder="Find the word"
                  onChange={(event) => {
                    handleChange(event);
                    handleLiveChange({ ...values, filter: event.target.value });
                  }}
                />
                <svg className="absolute right-[20px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 fill-none stroke-lightSecondGray">
                  <use href="/public/icons/sprite.svg#icon-search" />
                </svg>
              </label>

              {/* Select */}
              <div className="w-full md:h-[48px] md:w-[164px]">
                <DashboardSelect
                  name="category"
                  value={values.category}
                  onChange={(value) => {
                    setFieldValue("category", value);
                    handleLiveChange({ ...values, category: value });
                  }}
                  options={options}
                  placeholder="Categories"
                />
              </div>

              {values.category === "verb" && (
                <TwoChecks
                  onChange={(val) => {
                    setFieldValue("isIrregular", val);
                    handleLiveChange({ ...values, isIrregular: val });
                  }}
                />
              )}
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex flex-col gap-4 md:mt-4 md:flex-row md:items-center xl:mt-0">
        <Statistics />
        <div className="flex flex-row items-center gap-4">
          <AddWordBtn />
          <TrainWordBtn />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
