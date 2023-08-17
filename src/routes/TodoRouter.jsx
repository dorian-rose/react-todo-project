import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, NewTodoPage, TodoPage } from "../todo/pages";
import { NavBar } from "../todo/components/NavBar";

export const TodoRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/new" element={<NewTodoPage />} />

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
