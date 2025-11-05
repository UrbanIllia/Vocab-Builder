import { useDispatch } from "react-redux";
import { addWordFromUsersThunk } from "../redux/wordsUser/operationsWordsUser";
import { toast } from "react-toastify";

const AddToDictionaryBtn = ({ row }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center gap-2 rounded-md hover:bg-secondaryGreen/20 md:flex-row"
      onClick={() =>
        dispatch(addWordFromUsersThunk(row.original._id))
          .unwrap()
          .then(() => toast.success("Added to your dictionary"))
          .catch((error) => {
            if (error?.includes("409")) {
              toast.error("This word is already in your dictionary");
            } else {
              toast.error("Something went wrong");
            }
          })
      }
    >
      <span className="text-sm font-medium text-lightSecondGray md:text-lg xl:text-xl">
        Add to dictionary
      </span>
      <svg aria-hidden="true" focusable="false" className="h-5 w-5">
        <use href="/icons/sprite.svg#icon-arrright" />
      </svg>
    </button>
  );
};

export default AddToDictionaryBtn;
