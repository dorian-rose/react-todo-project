import { useState } from "react";

export const Form = ({ handleNewTodo }) => {
  const [errors, setErrors] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setErrors([]);

    const newTodo = {
      id: Date.now(),
      todo: ev.target.tarea.value,
      description: ev.target.description.value,
      done: false,
      date: new Date(),
    };

    if (newTodo.todo == "") {
      setErrors("Rellena el título");
      return;
    } else if (newTodo.description == "") {
      setErrors("Rellena la descripción");
      return;
    }

    handleNewTodo(newTodo);
    ev.target.tarea.value = "";
    ev.target.description.value = "";
  };

  return (
    <>
      <form className="flex" onSubmit={handleSubmit}>
        <input type="text" id="tarea" name="tarea" placeholder="Tarea" />

        <textarea
          name="description"
          id="description"
          placeholder="Descripción de la tarea"
        ></textarea>
        <button type="submit">Añadir</button>
      </form>
      <p className="error-message">{errors}</p>
    </>
  );
};
