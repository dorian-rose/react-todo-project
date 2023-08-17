import React from "react";
import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";

export const Logout = () => {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="logout" onClick={logOut}>
      Logout
    </button>
  );
};
