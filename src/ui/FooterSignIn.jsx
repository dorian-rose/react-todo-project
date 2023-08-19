import { Link } from "react-router-dom";

export const FooterSignIn = () => {
  return (
    <footer className="fixed bottom-0 inset-x-0 bottom-0 bg-gray-200 py-1 rounded-t-3xl max-w-2xl m-auto sm:border-l-2 sm:border-r-2 border-grey-200">
      <Link
        to="/"
        className="relative l-0 r-0 m-auto block w-fit -top-6 py-2 px-2 rounded-full text-white text-3xl bg-primary border border-4 border-tertiary hover:border hover:border-secondary hover:bg-tertiary hover:text-secondary sm:text-4xl"
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
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </Link>
    </footer>
  );
};
