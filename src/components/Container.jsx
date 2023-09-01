import { Form } from "./Form";
import { EntryContainer } from "./EntryContainer";
import { useTodoList } from "../hooks/useTodoList";

//Container contains all components for todo list
export const Container = () => {
  const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } =
    useTodoList();

  return (
    <>
      <div>
        <h1 className="title">Lista de tareas</h1>
      </div>
      <Form handleNewTodo={handleNewTodo} />
      <EntryContainer
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
};
