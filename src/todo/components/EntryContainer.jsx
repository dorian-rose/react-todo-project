import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Entry } from "./Entry";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/slice/tasks/taskThunk";
import { setTitle } from "../../store/slice/title/titleSlice";
import { setShowAll } from "../../store/slice/display/displaySlice";
import { setDate } from "../../store/slice/date/dateSlice";
import { format } from "date-fns";

export const EntryContainer = () => {
  const dispatch = useDispatch();
  //get user
  const auth = getAuth();
  const user = auth.currentUser;

  //define dates
  const today = format(new Date(), "EEE dd MMM yy");
  const { date } = useSelector((state) => state.date);

  //collect data from state
  const { ok, msg, todos, isLoading } = useSelector((state) => state.task);

  //collect title and display from redux
  const { title } = useSelector((state) => state.title);
  const { showAll } = useSelector((state) => state.display);
  //use states: button title and tasks to display

  // const [title, setTitle] = useState("Tareas de hoy");
  //const [showAll, setShowAll] = useState(false);

  //reset title and dispatch to fetch on change of "date"

  useEffect(() => {
    if (date === today || !date) {
      dispatch(setTitle("Tareas de hoy"));
    } else {
      const string = date.split(" ");
      const day = string[0];
      dispatch(setTitle(`Tareas de ${day}`));
    }
    //make fetch/dispatch
    // if (date !== "") {
    if (!showAll) {
      const body = { taskDate: date, uid: user.uid };
      const method = "POST";
      const url = `${import.meta.env.VITE_TASK_URL}/date`;
      dispatch(getTasks(url, method, body));
    } else {
      const method = "GET";
      const url = `${import.meta.env.VITE_TASK_URL}/user/${user.uid}`;
      dispatch(getTasks(url, method));
    }
  }, [date, showAll]);

  return (
    <section className="mb-28">
      <div className="flex justify-between mx-7 my-5">
        <button
          className={`hover:text-primary 
          ${
            showAll
              ? "text-secondary underline text-sm"
              : "text-primary text-lg "
          }`}
          onClick={() => {
            {
              date ? dispatch(setDate(date)) : dispatch(setDate(today));
            }
            dispatch(setShowAll(false));
          }}
        >
          {title}
        </button>
        <button
          className={` hover:text-primary 
          ${
            showAll
              ? "text-primary text-lg "
              : "text-sm text-secondary underline"
          }`}
          onClick={() => {
            dispatch(setDate(""));
            dispatch(setShowAll(true));
          }}
        >
          Mostrar todas las tareas
        </button>
      </div>

      {isLoading && <p className="absolute top-48 left-48">Loading...</p>}
      {ok == false ? (
        <p className="text-center w-fit m-auto my-5 italic text-alert border border-1 border-alert p-3 rounded-lg">
          {msg}
        </p>
      ) : (
        todos.map((todo) => <Entry key={todo._id} todo={todo} />)
      )}
    </section>
  );
};
