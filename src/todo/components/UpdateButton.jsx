import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/slice/tasks/taskThunk";
import { fetchData } from "../../helper/fetch";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const UpdateButton = ({ todo, showUpdate, setShowUpdate }) => {
  useEffect(() => {
    //test
  }, []);

  //imports from useform to capture and validate form data
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  //collect date from redux
  const { date } = useSelector((state) => state.date);

  const dispatch = useDispatch();

  const updateTask = async (data) => {
    const body = { ...data, _id: todo._id, uid: todo.uid, done: todo.done };

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
    setShowUpdate(false);
  };
  return (
    <>
      {showUpdate && (
        <>
          <form
            className="absolute bg-tertiary left-0 right-0 m-2 border border-primary shadow-lg rounded-xl z-20 pb-4 top-1/2 -translate-y-1/2 max-w-2xl m-auto"
            onSubmit={handleSubmit((data) => updateTask(data))}
          >
            <h2 className="mt-5 text-primary text-lg text-center sm:text-xl">
              Actualizar tarea
            </h2>
            <button
              onClick={() => setShowUpdate(false)}
              className="absolute top-4 right-5 shadow px-1 text-secondary hover:text-primary"
            >
              X
            </button>
            <label
              htmlFor="todo"
              className="relative top-5 top-5 left-12 sm:left-20 bg-tertiary px-2 text-lines text-sm"
            >
              Tarea
            </label>
            <input
              {...register("todo", {
                required: "Nombre de tarea es obligatorio",
                minLength: {
                  value: 2,
                  message: "Nombre debe tener al menos dos caracteres",
                },
              })}
              type="text"
              defaultValue={todo.todo}
              className="mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
            />
            <p className="text-center italic text-alert ">
              {errors.todo?.message}
            </p>
            <label
              htmlFor="description"
              className="relative top-5 top-5 left-12 sm:left-20 bg-tertiary px-2 text-lines text-sm"
            >
              Descripción
            </label>
            <textarea
              {...register("description", {
                required: "Inserte descripción",
              })}
              type="text"
              defaultValue={todo.description}
              className="mt-2 w-10/12 m-auto block border border-1  rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
            />
            <p className="text-center italic text-alert ">
              {errors.description?.message}
            </p>
            <button
              className="mt-8 w-10/12 m-auto block bg-primary text-tertiary shadow-md rounded-3xl px-4 py-2 focus:outline-none focus:border-primary hover:text-secondary hover:bg-tertiary hover:border hover:border-1  hover:border-secondary"
              type="submit"
            >
              Actualizar tarea
            </button>
          </form>
        </>
      )}
    </>
  );
};
