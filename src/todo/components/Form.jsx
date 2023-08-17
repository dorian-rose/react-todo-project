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
  const [errors, setErrors] = useState("");

  //define  method and url for fetch
  const url = import.meta.env.VITE_TASK_URL;
  const urlGet = `${import.meta.env.VITE_TASK_URL}/user/${user.uid}`;
  const method = "POST";

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setErrors([]);
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
    console.log("date in form", formattedDate);
    if (newTodo.todo == "") {
      setErrors("Rellena el título");
      return;
    } else if (newTodo.description == "") {
      setErrors("Rellena la descripción");
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
      <form className="" onSubmit={handleSubmit}>
        <input
          className="block mt-5 border border-1 bg-red-500"
          type="text"
          id="tarea"
          name="tarea"
          placeholder="Tarea"
        />

        <textarea
          className="w-fit bg-blue-500 block mt-20 border border-1"
          name="description"
          id="description"
          placeholder="Descripción de la tarea"
        ></textarea>
        <DayPick setDatePick={setDatePick} datePick={datePick} />
        <button type="submit">Añadir</button>
      </form>
      <p className="error-message">{errors}</p>
    </>
  );
};
