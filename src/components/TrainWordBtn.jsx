import { Link } from "react-router-dom";

const TrainWordBtn = () => {
  return (
    <div>
      <Link
        to="/training"
        className="flex flex-row items-center justify-center gap-2 transition hover:scale-110 hover:bg-secondaryGreen/20"
      >
        Train oneself
        <svg aria-hidden="true" focusable="false" className="h-5 w-5">
          <use href="/public/icons/sprite.svg#icon-arrright" />
        </svg>
      </Link>
    </div>
  );
};

export default TrainWordBtn;
