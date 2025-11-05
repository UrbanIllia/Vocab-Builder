import clsx from "clsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LanguageIcon from "./LanguageIcon";
import { selectTasksIsLoading } from "../redux/tasks/selectorsTasks";
import Loader from "./Loader";
import PleaseAddWord from "./PleaseAddWord";
import WellDoneModal from "./WellDoneModal";
import { closeWellDoneModal, openWellDoneModal } from "../redux/ui/uiSlice";
import { isOpenWellDoneModal } from "../redux/ui/uiSelectors";
import { postUsersAnswersThunk } from "../redux/userAnswers/operationsUserAnswers";

const TrainingRoom = ({ tasks }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectTasksIsLoading);
  const list = tasks?.tasks || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const isOpen = useSelector(isOpenWellDoneModal);
  console.log("answers", answers);

  const handleCloseWellDoneModal = () => {
    dispatch(closeWellDoneModal());
  };

  const task = list[currentIndex];
  console.log("task", task);

  const handleNext = () => {
    if (userAnswer.trim()) {
      setAnswers((prev) => [
        ...prev,
        {
          _id: task._id,
          en: task.task === "en" ? userAnswer : task.en,
          ua: task.task === "ua" ? userAnswer : task.ua,
          task: task.task,
        },
      ]);
    }
    setUserAnswer("");
    setCurrentIndex((p) => p + 1);
    toast.success("Next word");
  };

  const handleSave = () => {
    if (userAnswer.trim()) {
      answers.push({
        _id: task._id,
        en: task.task === "en" ? userAnswer : task.en,
        ua: task.task === "ua" ? userAnswer : task.ua,
        task: task.task,
      });
    }

    dispatch(postUsersAnswersThunk(answers))
      .unwrap()
      .then(() => {
        toast.success("Well done! :)");
        dispatch(openWellDoneModal());
      })
      .catch(() => toast.error("Something went wrong"));
  };

  const handleInputChange = (e) => {
    const val = e.target.value;

    if (task.task === "en") {
      const enReg = /^[A-Za-z' -]*$/;
      if (enReg.test(val)) setUserAnswer(val);
      return;
    }

    if (task.task === "ua") {
      const uaReg = /^[А-ЯІЇЄҐа-яієїґʼ -]*$/;
      if (uaReg.test(val)) setUserAnswer(val);
      return;
    }

    // если вдруг?
    setUserAnswer(val);
  };
  if (isLoading) {
    return <Loader />;
  }
  if (list.length < 1) {
    return <PleaseAddWord />;
  }
  return (
    <div>
      <div className="mb-[116px] flex flex-col items-center justify-between rounded-[15px] bg-white p-0 md:mb-[40px] md:p-[18px] xl:mb-[80px] xl:flex-row">
        <div className="relative h-[195px] w-full max-w-[343px] rounded-t-[15px] border-b border-tableBorder p-[22px] md:h-[282px] md:max-w-[668px] xl:h-[302px] xl:max-w-[602px] xl:rounded-none xl:border-b-0 xl:border-r">
          <label>
            <LanguageIcon variant={task.task === "ua" ? "ua" : "en"} />

            <textarea
              type="textarea"
              value={userAnswer}
              // onChange={(e) => setUserAnswer(e.target.value)}
              onChange={handleInputChange}
              placeholder={
                task.task === "en"
                  ? "Enter English translation"
                  : "Введіть український переклад"
              }
              className={clsx(
                "h-[120px] w-full resize-none overflow-y-hidden text-base font-medium leading-oneAndHalf text-primaryBlack outline-none focus:placeholder:text-transparent md:text-xl",
                "md:h-[200px] md:pr-[114px]",
                "placeholder:text-base placeholder:font-medium placeholder:leading-oneAndHalf placeholder:text-primaryBlack md:placeholder:text-xl",
              )}
            ></textarea>
          </label>
          {currentIndex < list.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="flex flex-row items-center gap-2 rounded-md p-[2px] text-base font-medium leading-oneAndHalf text-lightSecondGray/50 transition hover:scale-110 hover:bg-secondaryGreen/20"
            >
              Next
              <svg
                aria-hidden="true"
                focusable="false"
                className={clsx("h-4 w-4 fill-none stroke-lightSecondGray/50")}
              >
                <use href="/public/icons/sprite.svg#icon-arrow-right"></use>
              </svg>
            </button>
          )}
        </div>
        <div className="relative h-[195px] w-full max-w-[343px] rounded-b-[15px] p-[22px] md:h-[282px] md:max-w-[668px] xl:h-[302px] xl:max-w-[602px] xl:rounded-none">
          <div>
            <LanguageIcon variant={task.task === "ua" ? "en" : "ua"} />
            <p
              className={clsx(
                "h-[120px] w-full resize-none overflow-y-hidden text-base font-medium leading-oneAndHalf text-primaryBlack outline-none md:text-xl",
                "md:h-[200px] md:pr-[114px]",
                "placeholder:text-base placeholder:font-medium placeholder:leading-oneAndHalf placeholder:text-primaryBlack md:placeholder:text-xl",
              )}
            >
              {task.task === "en" ? task.ua : task.en}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px] md:flex-row">
        <button
          type="button"
          disabled={currentIndex !== list.length - 1}
          onClick={handleSave}
          className={clsx(
            "flex h-[56px] w-full max-w-[343px] items-center justify-center rounded-[30px] text-base font-bold leading-oneAndHalf transition-all",
            currentIndex !== list.length - 1
              ? "cursor-not-allowed bg-primaryGreen/50 text-primaryWhite"
              : "bg-primaryGreen text-primaryWhite hover:scale-90 hover:text-2xl",
          )}
        >
          Save
        </button>
        <button
          type="button"
          className="flex h-[56px] w-full max-w-[203px] items-center justify-center rounded-[30px] border border-primaryGreen text-base font-bold text-primaryGreen transition-all hover:scale-90 hover:text-2xl md:text-lg"
        >
          Cancel
        </button>
      </div>
      {isOpen && <WellDoneModal isClose={handleCloseWellDoneModal} />}
    </div>
  );
};

export default TrainingRoom;
