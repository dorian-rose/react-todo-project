import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/slice/tasks/taskThunk";
import { fetchData } from "../../helper/fetch";

export const ToggleButton = ({ todo }) => {
  //collect date from redux
  const { date } = useSelector((state) => state.date);

  const dispatch = useDispatch();

  const handleToggleTodo = async () => {
    const body = { ...todo };
    if (body.done == true) {
      body.done = false;
    } else {
      body.done = true;
    }

    //define  method and url for fetch
    const url = import.meta.env.VITE_TASK_URL;
    const method = "PUT";
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
    <>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="appearance-none border-primary border border-2 rounded-sm w-5 h-5 mr-2 checked:bg-primary relative left-3"
          checked={todo.done}
          onClick={() => handleToggleTodo(todo.id)}
          readOnly
        />
        <span className="relative right-3.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="#F9FCF5"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>

        {/* <button
        className={todo.done.toString()}
        onClick={() => handleToggleTodo(todo.id)}
      >
        {buttonState}
      </button> */}
      </label>
    </>
  );
};
