import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { openAddWordModal } from "../redux/ui/uiSlice";
import { useDispatch } from "react-redux";

const PleaseAddWord = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-8 xl:flex-row xl:justify-center">
      <div className="order-1 flex items-center justify-center xl:order-2">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/blood-report-tab@2x.png 2x, /images/blood-report-tab@1x.png 1x"
            width="205"
            height="230"
          />
          <source
            srcSet="/images/blood-report-mob@2x.png 2x, /images/blood-report-mob@1x.png 1x"
            width="144"
            height="166"
          />
          <img
            src="/images/blood-report-mob@1x.png"
            alt="Illustration"
            width="144"
            height="166"
            loading="lazy"
            className="h-[166px] w-[144px] object-cover object-center md:h-[230px] md:w-[205px]"
          />
        </picture>
      </div>
      <div className="order-2 mx-auto flex flex-col md:w-[581px] xl:order-1 xl:mx-0">
        <h3 className="mb-4 text-base font-medium leading-oneAndHalf text-lightSecondGray md:mb-8 md:text-xl">
          You don't have a single word to learn right now.
        </h3>
        <p className="mb-[132px] text-sm font-normal text-lightSecondGray md:mb-[64px] md:text-base md:leading-oneAndHalf">
          Please create or add a word to start the workout. We want to improve
          your vocabulary and develop your knowledge, so please share the words
          you are interested in adding to your study.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <button
            type="button"
            onClick={() => {
              navigate("/dictionary");
              dispatch(openAddWordModal());
            }}
            className={clsx(
              "flex h-[56px] w-full max-w-[343px] items-center justify-center rounded-[30px] bg-primaryGreen text-base font-bold leading-oneAndHalf text-primaryWhite transition-all hover:scale-90 hover:text-2xl",
            )}
          >
            Add word
          </button>
          <button
            type="button"
            onClick={() => navigate("/recommend")}
            className="flex h-[56px] w-full max-w-[203px] items-center justify-center rounded-[30px] border border-primaryGreen text-base font-bold text-primaryGreen transition-all hover:scale-90 hover:text-2xl md:text-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PleaseAddWord;
