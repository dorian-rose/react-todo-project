//import { useTodoList } from "../hooks/useTodoList";

export const Form = ({ handleNewTodo }) => {
  //   const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } =
  //     useTodoList();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newTodo = {
      id: Date.now(),
      todo: ev.target.tarea.value,
      description: ev.target.description.value,
      done: false,
      date: new Date(),
    };
    handleNewTodo(newTodo);
    ev.target.tarea.value = "";
    ev.target.description.value = "";
  };



  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input type="text" id="tarea" name="tarea" placeholder="Tarea"  />
      <textarea
        name="description"
        id="description"
        placeholder="Descripción de la tarea"
      ></textarea>
      <button type="submit">Añadir</button>
    </form>
  );
};
