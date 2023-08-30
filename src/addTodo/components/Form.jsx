import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { fetchData } from "../../helper/fetch";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/slice/tasks/taskThunk";
import { DayPick } from "./DayPick";
import { format } from "date-fns";

export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //get user
  const auth = getAuth();
  const user = auth.currentUser;

  //configure usestates
  const [datePick, setDatePick] = useState(new Date());
  const [todoError, setTodoError] = useState("");
  const [descError, setDescError] = useState("");

  //define  method and url for fetch
  const url = import.meta.env.VITE_TASK_URL;
  const urlGet = `${import.meta.env.VITE_TASK_URL}/user/${user.uid}`;
  const method = "POST";

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setTodoError("");
    setDescError("");
    //format date
    const formattedDate = format(datePick, "EEE dd MMM yy");
    // const taskDate = formattedDate.replaceAll(" ", "_");
    //body
    const newTodo = {
      uid: user.uid,
      todo: ev.target.tarea.value,
      description: ev.target.description.value,
      done: false,
      taskDate: formattedDate,
    };

    if (newTodo.todo == "" || newTodo.description == "") {
      if (newTodo.todo == "") {
        setTodoError("Rellena el título");
      }
      if (newTodo.description == "") {
        setDescError("Rellena la descripción");
      }

      return;
    }
    await fetchData(url, method, newTodo);
    dispatch(getTasks(urlGet, "GET"));

    navigate("/todo");
    // ev.target.tarea.value = "";
    // ev.target.description.value = "";
  };

  return (
    <>
      <h1 className="mt-16 mb-7 text-primary text-lg text-center sm:text-xl">
        <span className="bg-primary text-tertiary px-1.5 me-2 rounded-full">
          +
        </span>
        Añadir nueva tarea
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="w-10/12 m-auto block border border-1 border-lines rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
          type="text"
          id="tarea"
          name="tarea"
          placeholder="Tarea"
        />
        {todoError && (
          <p className="text-center italic text-alert ">{todoError}</p>
        )}
        <textarea
          className="w-10/12 m-auto mt-4 block border border-1 border-lines rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
          name="description"
          id="description"
          placeholder="Descripción de la tarea"
        ></textarea>
        {descError && (
          <p className="text-center italic text-alert ">{descError}</p>
        )}
        <DayPick setDatePick={setDatePick} datePick={datePick} />

        <button
          className="text-primary text-lg m-auto block sm:text-xl sm:px-4 sm:mt-6 border border-1 border-primary rounded-full px-2 mt-4 hover:text-secondary hover:border-secondary"
          type="submit"
        >
          Añadir
        </button>
      </form>
    </>
  );
};
