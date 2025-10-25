import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import clsx from "clsx";
import WordsTable from "../components/WordsTable";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllUserWords } from "../redux/wordsUser/operationsWordsUser";

const Dictionary = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.ownWords.words);
  console.log(words);

  useEffect(() => {
    dispatch(getAllUserWords())
      .unwrap()
      .then(() => {
        toast.success("OK");
      });
  }, [dispatch]);

  return (
    <div
      className={clsx(
        "px-4 pb-[48px] pt-8",
        "md:px-8 md:pt-[80px]",
        "xl:px-[100px]",
      )}
    >
      <Dashboard />
      <WordsTable data={words} />
    </div>
  );
};

export default Dictionary;
