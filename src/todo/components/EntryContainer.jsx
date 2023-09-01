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

  //translate days
  const translateDays = (day) => {
    const spanishDay = {
      Mon: "Lunes",
      Tue: "Martes",
      Wed: "Miércoles",
      Thu: "Jueves",
      Fri: "Viernes",
      Sat: "Sábado",
      Sun: "Domingo",
    };
    return spanishDay[day];
  };

  useEffect(() => {
    //set text of title button
    if (date === today || !date) {
      dispatch(setTitle("Tareas de hoy"));
    } else {
      const string = date.split(" ");
      const day = string[0];
      const spanishDay = translateDays(day);
      dispatch(setTitle(`Tareas de ${spanishDay}`));
    }

    //determine if all tasks are shown or just one date
    if (showAll === "date") {
      const body = { taskDate: date, uid: user.uid };
      const method = "POST";
      const url = `${import.meta.env.VITE_TASK_URL}/date`;
      dispatch(getTasks(url, method, body));
    } else {
      const method = "GET";
      const url = `${import.meta.env.VITE_TASK_URL}/user/${user.uid}`;
      dispatch(getTasks(url, method));
    }
  }, [date]);

  return (
    <section className="mb-28">
      <div className="flex justify-between mx-7 my-5 max-w-xl sm:my-10 sm:mx-auto">
        <button
          className={`hover:text-primary 
          ${
            showAll === "all"
              ? "text-secondary underline text-sm sm:text-lg"
              : "text-primary text-lg hover:cursor-default sm:text-2xl"
          }`}
          onClick={() => {
            {
              date ? dispatch(setDate(date)) : dispatch(setDate(today));
            }
            dispatch(setShowAll("date"));
          }}
        >
          {title}
        </button>
        <button
          className={` hover:text-primary 
          ${
            showAll === "all"
              ? "text-primary text-lg hover:cursor-default sm:text-2xl"
              : "text-sm text-secondary underline sm:text-lg"
          }`}
          onClick={() => {
            dispatch(setDate(""));
            dispatch(setShowAll("all"));
          }}
        >
          Mostrar todas las tareas
        </button>
      </div>

      {isLoading && <p className="absolute top-48 left-48">Loading...</p>}
      {showAll === "search" && (
        <h3 className="italic mx-7 text-secondary text-sm">
          Resultados de la búsqueda:
        </h3>
      )}

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
