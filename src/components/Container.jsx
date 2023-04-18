import { Form } from "./Form";
import { EntryContainer } from "./EntryContainer";
import { useTodoList } from "../hooks/useTodoList";

export const Container = () => {
  const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } =
    useTodoList();
  console.log("cont", todos);
  return (
    <>
      <div>
        <h1>Todo List</h1>
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
