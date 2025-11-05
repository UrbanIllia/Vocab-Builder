import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import clsx from "clsx";
import WordsTable from "../components/WordsTable";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllUserWords } from "../redux/wordsUser/operationsWordsUser";
import {
  selectPage,
  selectPerPage,
  selectTotalPages,
} from "../redux/wordsUser/selectorsWordsUser";
import Pagination from "../components/Pagination";
import { selectDictionaryFilters } from "../redux/dictionaryFilters/selectorsDIcFilters";
import { getUserStatisticsThunk } from "../redux/userAnswers/operationsUserAnswers";

const Dictionary = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.ownWords.words);
  console.log("words", words);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);

  const { filter, category, isIrregular } = useSelector(
    selectDictionaryFilters,
  );

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    dispatch(
      getAllUserWords({
        page: newPage,
        limit: perPage,
        keyword: filter,
        category,
        isIrregular,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      getAllUserWords({
        page,
        limit: perPage,
        keyword: filter,
        category,
        isIrregular,
      }),
    )
      .unwrap()
      .then(() => {
        toast.success("OK");
      });
  }, [dispatch, page, perPage, filter, category, isIrregular]);

  useEffect(() => {
    dispatch(getUserStatisticsThunk());
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
      <div className="mx-auto flex items-center justify-center">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Dictionary;
