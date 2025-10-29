import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { deleteOneUserWord } from "../redux/wordsUser/operationsWordsUser";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import EditWordModal from "./EditWordModal";

const RowActions = ({ row }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModaslOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const toggleModalEdit = () => {
    setModaslOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-lightSecondGray/50 transition duration-500 hover:rotate-90 hover:bg-primaryGreen/20 hover:text-lightSecondGray md:text-xl xl:text-[22px]"
      >
        ...
      </button>

      {/* Меню */}
      {open && (
        <div
          className={clsx(
            "absolute right-0 top-[calc(100%+4px)] z-50",
            "flex flex-col gap-2 rounded-[15px] border bg-white px-6 py-3 shadow-lg",
          )}
        >
          <button
            onClick={() => {
              setOpen(false);
              toggleModalEdit();
            }}
            className="flex flex-row gap-2 rounded-md px-2 text-sm font-medium text-lightSecondGray transition hover:scale-110 hover:bg-green-100 md:text-base md:leading-oneAndHalf"
          >
            <svg aria-hidden="true" focusable="false" className="h-4 w-4">
              <use href="/public/icons/sprite.svg#icon-edit"></use>
            </svg>
            <span>Edit</span>
          </button>
          <button
            onClick={() => {
              dispatch(deleteOneUserWord(row.original._id)).unwrap();
              toast.success("Word is deleted");
              setOpen(false);
            }}
            className="flex flex-row gap-2 rounded-md px-2 text-sm font-medium text-lightSecondGray transition hover:scale-110 hover:bg-red-100 md:text-base md:leading-oneAndHalf"
          >
            <svg aria-hidden="true" focusable="false" className="h-4 w-4">
              <use href="/public/icons/sprite.svg#icon-trash"></use>
            </svg>
            <span>Delete</span>
          </button>
        </div>
      )}
      {modalOpen && (
        <EditWordModal toggleModalEdit={toggleModalEdit} row={row} />
      )}
    </div>
  );
};

export default RowActions;
