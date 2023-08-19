import { Routes, Route, Navigate } from "react-router-dom";
import { TodoPage } from "../todo/pages";
import { NewTodoPage } from "../addTodo/pages";
import { HeaderComp } from "../ui/HeaderComp";
import { FooterComp } from "../ui/FooterComp";

export const TodoRouter = () => {
  return (
    <>
      <HeaderComp />
      <main className="max-w-2xl m-auto ">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/new" element={<NewTodoPage />} />

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </main>
      <FooterComp />
    </>
  );
};
