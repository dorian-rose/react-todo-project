import React from "react";
import { Entry } from "./Entry";
import { useTodoList } from "../hooks/useTodoList";

export const EntryContainer = () => {
  const { todos } = useTodoList();

  return (
    <section>
      <h2>Tareas</h2>
      {todos.map((todo) => (
        <Entry key={todo.tarea} todo={todo} />
      ))}
    </section>
  );
};
