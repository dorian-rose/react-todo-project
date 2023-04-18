//import { useTodoList } from "../hooks/useTodoList";

export const Entry = ({ todo, handleToggleTodo, handleDeleteTodo }) => {
  // const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } =
  //   useTodoList();
  return (
    <>
      <article>
        <li>
          <h3>{todo.todo}</h3>
          <p>{todo.description}</p>
          <button onClick={() => handleToggleTodo(todo.id)}>Finalizar</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
        </li>
      </article>
    </>
  );
};
