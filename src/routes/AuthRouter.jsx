import { Routes, Route, Navigate } from "react-router-dom";
import { StartPage, LoginPage, RegisterPage } from "../auth/pages/index";
export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
