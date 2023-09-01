import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { fetchData } from "../../helper/fetch";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/slice/tasks/taskThunk";
import { DayPick } from "./DayPick";
import { format } from "date-fns";

/**
 * function that returns form. On submit of form, makes a POST to api to create new entry using form data. Form managed manually (without react form hook) as an exercise.
 */
export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //configure usestates
  const [datePick, setDatePick] = useState(new Date());
  const [todoError, setTodoError] = useState("");
  const [descError, setDescError] = useState("");
  const [postError, setPostError] = useState("");

  //get uid from store, then define  method and url for fetch on submit
  const { uid } = useSelector((state) => state.user);
  const url = import.meta.env.VITE_TASK_URL;
  const urlGet = `${import.meta.env.VITE_TASK_URL}/user/${uid}`;
  const method = "POST";

  /**
   * function that collects data from form submit event, validates data and if correct, makes api POST with form data.
   * @param {*} ev form submit event
   */
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setTodoError("");
    setDescError("");

    //format date of task received from datePick usestate hook
    const formattedDate = format(datePick, "EEE dd MMM yy");

    //configure body of POST
    const newTodo = {
      uid: uid,
      todo: ev.target.tarea.value,
      description: ev.target.description.value,
      done: false,
      taskDate: formattedDate,
    };

    //handle errors - if field left blank
    if (newTodo.todo == "" || newTodo.description == "") {
      if (newTodo.todo == "") {
        setTodoError("Rellena el título");
      }
      if (newTodo.description == "") {
        setDescError("Rellena la descripción");
      }
      return;
    }

    //make call to API to create new task
    const taskComplete = await fetchData(url, method, newTodo);

    if (!taskComplete.ok) {
      if (taskComplete.msg) {
        setPostError(taskComplete.msg);
      } else {
        setPostError(taskComplete.errores[0].msg);
      }
      return;
    }
    //update tasks in store after successful creation of new task
    dispatch(getTasks(urlGet, "GET"));

    //return to to do page
    navigate("/todo");
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
        {postError && (
          <p className="text-center italic text-alert mt-7 mx-5">{postError}</p>
        )}
      </form>
    </>
  );
};
