import { Link, useLocation } from "react-router-dom";

export const FooterComp = () => {
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 inset-x-0 bottom-0 bg-gray-200 py-7 rounded-t-3xl">
      <Link
        to={location.pathname === "/" ? "/new" : "/"}
        className={`relative l-0 r-0 m-auto block w-fit -top-12 ${
          location.pathname === "/" ? "py-1 px-3" : "py-2 px-2"
        }  rounded-3xl text-white text-3xl bg-primary border hover:border-1 hover:border-secondary hover:bg-tertiary hover:text-secondary`}
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
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        )}
      </Link>
    </footer>
  );
};
