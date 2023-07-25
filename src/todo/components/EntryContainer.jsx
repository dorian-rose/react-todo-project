//import { useTodoList } from "../hooks/useTodoList";
import { Entry } from "./Entry";

export const EntryContainer = ({
  todos,
  handleToggleTodo,
  handleDeleteTodo,
}) => {
  return (
    <section>
      <h2>Tareas</h2>

      {todos.map((todo) => (
        <Entry
          key={todo.id}
          todo={todo}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </section>
  );
};
