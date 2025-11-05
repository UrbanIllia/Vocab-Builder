import clsx from "clsx";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/register");
    }, 5000);
  });

  return (
    <div
      className={clsx(
        "flex h-screen justify-center bg-primaryGreen px-4 pb-[48px] pt-[180px]",
        "md:px-8 md:pt-[240px]",
        "xl:pt-[300px]",
      )}
    >
      <div>
        <Link
          to="/register"
          className="flex flex-row items-center justify-center gap-4"
        >
          <svg
            className="h-[56px] w-[56px] md:h-[70px] md:w-[70px] xl:h-[80px] xl:w-[80px]"
            aria-hidden="true"
            focusable="false"
          >
            <use href="/public/icons/sprite.svg#icon-Craftwork-two" />
          </svg>
          <p
            className={clsx(
              "text-[18px] font-semibold leading-oneAndThird text-primaryWhite",
              "md:text-[22px] md:leading-oneAndAlmostHalf",
            )}
          >
            VocabBuilder
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
