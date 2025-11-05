import { useDispatch } from "react-redux";
import EditWordForm from "./EditWordForm";
import { toast } from "react-toastify";
import { patchByIdUserWordThunk } from "../redux/wordsUser/operationsWordsUser";

const EditWordModal = ({ toggleModalEdit, row }) => {
  const dispatch = useDispatch();

  const handlePatchWord = (id, value) => {
    dispatch(patchByIdUserWordThunk({ id, body: value }))
      .unwrap()
      .then(() => {
        toast.success("Word changed");
        toggleModalEdit();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-auto w-full max-w-[342px] rounded-[15px] bg-primaryGreen px-4 py-[48px] md:max-w-[627px] md:rounded-[30px] md:px-[64px] md:py-[64px]">
        <button className="absolute right-4 top-4 transition duration-300 hover:rotate-180 hover:scale-125 md:right-5 md:top-5">
          <svg
            aria-hidden="true"
            focusable="false"
            className="h-6 w-6 md:h-8 md:w-8"
            onClick={toggleModalEdit}
          >
            <use href="/icons/sprite.svg#icon-x-close" />
          </svg>
        </button>
        <EditWordForm
          toggleModalEdit={toggleModalEdit}
          row={row}
          onPatch={handlePatchWord}
        />
      </div>
    </div>
  );
};

export default EditWordModal;
