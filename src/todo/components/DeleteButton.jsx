import { fetchData } from "../../helper/fetch";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/slice/tasks/taskThunk";

export const DeleteButton = ({ todo }) => {
  //collect date from redux
  const { date } = useSelector((state) => state.date);

  const dispatch = useDispatch();

  const handleDeleteTodo = async () => {
    const body = { _id: todo._id };
    console.log("body", body);
    const url = import.meta.env.VITE_TASK_URL;
    const urlGet = `${import.meta.env.VITE_TASK_URL}/user/${todo.uid}`;
    const method = "DELETE";
    await fetchData(url, method, body);

    //get updated todos:
    if (date !== "") {
      const newBody = { taskDate: date, uid: todo.uid };
      const newMethod = "POST";
      const newUrl = `${import.meta.env.VITE_TASK_URL}/date`;
      dispatch(getTasks(newUrl, newMethod, newBody));
    } else {
      const newMethod = "GET";
      const newUrl = `${import.meta.env.VITE_TASK_URL}/user/${todo.uid}`;
      dispatch(getTasks(newUrl, newMethod));
    }
  };
  return (
    <button onClick={() => handleDeleteTodo()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-primary hover:text-secondary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  );
};
