import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasksThunk } from "../redux/tasks/operationsTasks";
import { toast } from "react-toastify";
import clsx from "clsx";
import TrainingRoom from "../components/TrainingRoom";
import { selectTasks } from "../redux/tasks/selectorsTasks";
import { selectToken } from "../redux/auth/selectorsAuth";

const Training = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const token = useSelector(selectToken);
  console.log("Tasks:", tasks);
  console.log("Token", token);

  useEffect(() => {
    if (!token) return;
    dispatch(getAllTasksThunk())
      .unwrap()
      .then(() => toast.success("All tasks are downloaded successfully"))
      .catch(() => toast.error("Something went wrong"));
  }, [dispatch, token]);

  return (
    <div
      className={clsx(
        "px-4 pb-[48px] pt-8",
        "md:px-8 md:pt-[80px]",
        "xl:px-[100px]",
      )}
    >
      <TrainingRoom tasks={tasks} />
    </div>
  );
};

export default Training;
