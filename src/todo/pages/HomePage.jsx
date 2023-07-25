import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1 className="title">Homepage</h1>
      <h2 className="text-center">Welcome, {user?.name}</h2>
    </>
  );
};
