import clsx from "clsx";
import UserName from "./UserName";
import UserNav from "./UserNav";
import UserLogOut from "./UserLogOut";
import ModalImage from "./ModalImage";

// import UserLogOut from "./UserLogOut";

const BurgerModal = ({ handleCloseModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50"
      onClick={handleCloseModal}
    >
      <div
        className={clsx(
          "relative flex h-screen w-full max-w-[375px] justify-end",
          "md:max-w-[768px]",
        )}
      >
        <div
          className={clsx(
            "relative flex h-full w-[185px] flex-col justify-between bg-primaryGreen p-4",
            "md:w-[300px] md:p-5",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ///////////////////////////////////////////////////////////////////// */}
          <div className="flex flex-row">
            <UserName variant="modal" />
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-4 top-4"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                className={clsx(
                  "h-[32px] w-[32px] rounded fill-none transition hover:scale-110 hover:border hover:border-primaryWhite",
                  "md:h-[40px] md:w-[40px]",
                )}
              >
                <use href="/icons/sprite.svg#icon-x"></use>
              </svg>
            </button>
          </div>
          <div>
            <UserNav variant="modal" handleCloseModal={handleCloseModal} />
            <UserLogOut variant="modal" />
          </div>
          <div className="mx-auto self-end">
            <ModalImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerModal;
