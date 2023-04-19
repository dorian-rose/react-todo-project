//import { useTodoList } from "../hooks/useTodoList";

export const Entry = ({ todo, handleToggleTodo, handleDeleteTodo }) => {
  // const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } =
  //   useTodoList();

  return (
    <>
      <article>
        <div className="flex">
          <h3 className={todo.done.toString()}>{todo.todo}</h3>
          <p>- {todo.description}</p>

          <button
            className={todo.done.toString()}
            onClick={() => handleToggleTodo(todo.id)}
          >
            Finalizar
          </button>
          <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
        </div>
      </article>
    </>
  );
};
