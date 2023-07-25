import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { TodoRouter } from "./TodoRouter";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AppRouter = () => {
  const auth = getAuth();
  const [isLogged, setIsLogged] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  });

  return (
    <Routes>
      {!isLogged ? (
        <Route path="/*" element={<AuthRouter />}></Route>
      ) : (
        <Route path="/*" element={<TodoRouter />}></Route>
      )}
    </Routes>
  );
};
