import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectUserAnswers } from "../redux/userAnswers/selectorsUserAnswers";

const WellDoneModal = ({ isClose }) => {
  const answers = useSelector(selectUserAnswers);
  console.log("111", answers);
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      isClose();
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className={clsx(
          "relative mx-auto w-full max-w-[342px] rounded-[15px] bg-primaryGreen px-4 py-[48px]",
          "md:max-w-[528px] md:rounded-[30px] md:px-[64px]",
        )}
      >
        <button
          className="absolute right-4 top-4 transition duration-300 hover:rotate-180 hover:scale-125 md:right-5 md:top-5"
          onClick={isClose}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            className="h-6 w-6 md:h-8 md:w-8"
          >
            <use href="/icons/sprite.svg#icon-x-close" />
          </svg>
        </button>
        <div className="flex flex-row items-end">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/book-tab@2x.png 2x, /images/book-tab@1x.png 1x"
              width="212"
              height="179"
            />
            <source
              srcSet="/images/book-mob@2x.png 2x, /images/book-mob@1x.png 1x"
              width="122"
              height="101"
            />
            <img
              src="/images/book-mob@1x.png"
              alt="Illustration"
              width="122"
              height="101"
              loading="lazy"
              className="h-[101px] w-[122px] object-cover object-center md:h-[179px] md:w-[212px]"
            />
          </picture>
          <h3
            className={clsx(
              "mb-8 text-center text-2xl font-semibold leading-[1.1666] text-primaryWhite",
              "md:mb-7 md:text-[36px] md:leading-[1.2]",
            )}
          >
            Well done
          </h3>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2">
            <p
              className={clsx(
                "text-sm font-normal text-primaryWhite/50",
                "md:text-base md:leading-oneAndHalf",
              )}
            >
              Сorrect answers:
            </p>
            <ul>
              {answers.map((item, index) => {
                if (item.isDone === true && item.task === "en") {
                  return (
                    <li
                      key={index}
                      className="text-base font-medium leading-oneAndHalf text-primaryWhite md:text-xl"
                    >
                      {item.ua}
                    </li>
                  );
                } else if (item.isDone === true && item.task === "ua") {
                  return (
                    <li
                      key={index}
                      className="text-base font-medium leading-oneAndHalf text-primaryWhite md:text-xl"
                    >
                      {item.en}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p
              className={clsx(
                "text-sm font-normal text-primaryWhite/50",
                "md:text-base md:leading-oneAndHalf",
              )}
            >
              Mistakes:
            </p>
            <ul>
              {answers.map((item, index) => {
                if (item.isDone === false && item.task === "en") {
                  return (
                    <li
                      key={index}
                      className="text-base font-medium leading-oneAndHalf text-primaryWhite md:text-xl"
                    >
                      {item.ua}
                    </li>
                  );
                } else if (item.isDone === false && item.task === "ua") {
                  return (
                    <li
                      key={index}
                      className="text-base font-medium leading-oneAndHalf text-primaryWhite md:text-xl"
                    >
                      {item.en}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellDoneModal;
