import clsx from "clsx";

const Statistics = () => {
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
        20
      </p>
    </div>
  );
};

export default Statistics;
