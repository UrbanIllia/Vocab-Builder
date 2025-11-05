import clsx from "clsx";
import Dashboard from "../components/Dashboard";
import WordsTable from "../components/WordsTable";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { getAllWordsThunk } from "../redux/allWords/operationsAllWords";
import { useDispatch, useSelector } from "react-redux";
import {
  allPage,
  allPerPage,
  allTotalPages,
  allWords,
} from "../redux/allWords/selectorsAllWords";
import { toast } from "react-toastify";
import { selectRecommendFilters } from "../redux/recommendFilters/selectorsRecFilters";

const Recommend = () => {
  const dispatch = useDispatch();
  const page = useSelector(allPage);
  const perPage = useSelector(allPerPage);
  const totalPages = useSelector(allTotalPages);
  const words = useSelector(allWords);

  const { filter, category, isIrregular } = useSelector(selectRecommendFilters);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    dispatch(
      getAllWordsThunk({
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
      getAllWordsThunk({
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

  return (
    <div
      className={clsx(
        "px-4 pb-[48px] pt-8",
        "md:px-8 md:pt-[80px]",
        "xl:px-[100px]",
      )}
    >
      <Dashboard variant="recommend" />
      <WordsTable data={words} variant="recommend" />
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

export default Recommend;
