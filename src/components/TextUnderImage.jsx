import clsx from "clsx";

const TextUnderImage = () => {
  return (
    <div>
      <p
        className={clsx(
          "mb-4 text-center text-sm font-normal text-lightSecondGray/80",
          "md:text-base md:leading-oneAndHalf",
          "xl:mb-0",
        )}
      >
        Word · Translation · Grammar · Progress
      </p>
    </div>
  );
};

export default TextUnderImage;
