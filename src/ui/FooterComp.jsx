import { Link, useLocation } from "react-router-dom";
import { Logout } from "../auth/components/Logout";
import { useState } from "react";
import { UpdateUser } from "../userProfile/components/UpdateUser";

export const FooterComp = () => {
  const location = useLocation();
  const [showUpdateUser, setShowUpdateUser] = useState(false);

  return (
    <>
      <section>
        {showUpdateUser && <UpdateUser setShowUpdateUser={setShowUpdateUser} />}
      </section>
      <footer className="fixed bottom-0 inset-x-0 bottom-0 bg-gray-200 py-1 rounded-t-3xl max-w-2xl m-auto sm:border-l-2 sm:border-r-2 border-grey-200">
        <Link
          to={location.pathname === "/" ? "/new" : "/"}
          className={`relative l-0 r-0 m-auto block w-fit -top-6 ${
            location.pathname === "/"
              ? "py-1 px-3.5 sm:px-5 sm:py-2.5"
              : "py-2 px-2"
          }  rounded-full text-white text-3xl bg-primary border border-4 border-tertiary hover:border  hover:border-secondary hover:bg-tertiary hover:text-secondary sm:text-4xl`}
        >
          {location.pathname === "/" ? (
            "+"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          )}
        </Link>
        <Logout />
        <article className="group flex absolute bottom-3 right-16 sm:right-1/4 ">
          <p className="ease-in-out duration-300 m-2 text-secondary opacity-0 group-hover:opacity-70">
            Profile
          </p>
          <button
            onClick={() => setShowUpdateUser(true)}
            className="text-secondary "
          >
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        </article>
      </footer>
    </>
  );
};
