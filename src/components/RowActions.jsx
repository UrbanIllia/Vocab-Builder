import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const RowActions = ({ row }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  // Закрытие при клике вне меню
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
      {/* Кнопка с тремя точками */}
      <button
        onClick={toggleMenu}
        className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-lightSecondGray/50 transition duration-500 hover:rotate-90 hover:bg-primaryGreen/20 hover:text-lightSecondGray md:text-xl xl:text-[22px]"
      >
        ...
        {/* <HiOutlineDotsHorizontal className="text-lg text-lightSecondGray/50 transition group-hover:text-lightSecondGray" /> */}
      </button>

      {/* Меню */}
      {open && (
        <div
          className={clsx(
            "absolute right-0 top-[calc(100%+4px)] z-50",
            "py rounded-md border bg-white px-6 shadow-lg",
          )}
        >
          <button
            onClick={() => {
              console.log("Edit:", row.original);
              setOpen(false);
            }}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => {
              console.log("Delete:", row.original);
              setOpen(false);
            }}
            className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            🗑 Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default RowActions;
