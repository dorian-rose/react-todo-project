import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { TodoRouter } from "./TodoRouter";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from "../store/slice/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        const { displayName, uid, email, photoURL } = user;
        dispatch(setUser({ displayName, uid, email, photoURL }));
      } else {
        setIsLogged(false);
        dispatch(setUser({}));
      }
    });
  }, [auth]);

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
