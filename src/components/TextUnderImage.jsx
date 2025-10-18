import clsx from "clsx";

const TextUnderImage = () => {
  return (
    <div>
      <p
        className={clsx(
          "text-center text-sm font-normal text-lightSecondGray/80",
          "md:text-base md:leading-oneAndHalf",
        )}
      >
        Word · Translation · Grammar · Progress
      </p>
    </div>
  );
};

export default TextUnderImage;
