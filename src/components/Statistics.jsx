import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectUserStatistics } from "../redux/userAnswers/selectorsUserAnswers";

const Statistics = () => {
  const statistics = useSelector(selectUserStatistics);

  return (
    <div className="flex flex-row items-center gap-2">
      <p
        className={clsx(
          "text-sm font-medium text-lightSecondGray/50",
          "md:text-base md:leading-oneAndHalf",
        )}
      >
        To study:
      </p>
      <p
        className={clsx(
          "text-xl font-medium text-primaryBlack",
          "md:leading-oneAndHalf",
        )}
      >
        {statistics}
      </p>
    </div>
  );
};

export default Statistics;
