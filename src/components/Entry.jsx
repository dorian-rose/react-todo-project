//import { useTodoList } from "../hooks/useTodoList";

export const Entry = ({ todo, handleToggleTodo, handleDeleteTodo }) => {
  let buttonState;
  if (todo.done) {
    buttonState = "Finalizada";
  } else {
    buttonState = "Pendiente";
  }
  return (
    <>
      <article>
        <div>
          <h3 className={todo.done.toString()}>{todo.todo}</h3>
          <p className={todo.done.toString()}>- {todo.description}</p>
        </div>
        <div>
          <button
            className={todo.done.toString()}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {buttonState}
          </button>
          <button
            className="delete-button"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            Eliminar
          </button>
        </div>
      </article>
    </>
  );
};
