import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, ServicesPage, TodoPage } from "../todo/pages";

export const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
};
