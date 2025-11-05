import clsx from "clsx";

import AddWordForm from "./AddWordForm";
import { useDispatch } from "react-redux";
import { addUserWordThunk } from "../redux/wordsUser/operationsWordsUser";
import { toast } from "react-toastify";
import { useEffect } from "react";

const initialValues = {
  en: "",
  ua: "",
  category: "",
  isIrregular: false,
};

const AddWordModal = ({ handleCloseModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCloseModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleCloseModal();
  };

  const handleSubmitForm = async (values) => {
    console.log("handleSubmitForm", values);

    try {
      await dispatch(addUserWordThunk(values)).unwrap();

      toast.success("✅ Word added successfully!");
      handleCloseModal();
    } catch (error) {
      console.error("Error adding word:", error);
      toast.error(`❌ ${error || "Failed to add word"}`);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className={clsx(
          "relative mx-auto w-full max-w-[342px] rounded-[15px] bg-primaryGreen px-4 py-[48px]",
          "md:max-w-[628px] md:rounded-[30px] md:px-[64px] md:py-[48px]",
        )}
      >
        <button
          className="absolute right-4 top-4 transition duration-300 hover:rotate-180 hover:scale-125 md:right-5 md:top-5"
          onClick={handleCloseModal}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            className="h-6 w-6 md:h-8 md:w-8"
          >
            <use href="/icons/sprite.svg#icon-x-close" />
          </svg>
        </button>
        <h3
          className={clsx(
            "mb-4 text-2xl font-semibold leading-onePointSix tracking-tight text-primaryWhite",
            "md:mb-5 md:text-[40px] md:leading-onePointTwo",
          )}
        >
          Add word
        </h3>
        <p className="mb-4 text-base font-normal leading-oneAndHalf text-primaryWhite md:mb-5">
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </p>
        <AddWordForm
          initialValues={initialValues}
          handleSubmitForm={handleSubmitForm}
          onCancel={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default AddWordModal;
