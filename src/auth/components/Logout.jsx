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
    <>
      <article className="group flex absolute bottom-3 left-16 sm:left-1/4 ">
        <button className="text-secondary " onClick={logOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </button>
        <p className="ease-in-out duration-300 m-2 text-secondary opacity-0 group-hover:opacity-70">
          Logout
        </p>
      </article>
    </>
  );
};
