import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

/**
 * function that returns jsx with start actions - login or sign up - and displays logo (unlogged homepage)
 */
export const StartPage = () => {
  return (
    <>
      <section>
        <article className="absolute bottom-1/2 translate-y-1/2 left-0 right-0 bg-primaryLight mb-20 max-w-2xl m-auto">
          <div className="m-auto max-w-sm">
            <img className="w-full" src={logo} alt="todo logo" />
          </div>
        </article>
        <article className="absolute bottom-10 left-0 right-0 m-auto max-w-2xl">
          <div className="flex justify-between mb-10">
            <Link
              to="/login"
              className="px-18 py-5 sm:pt-5  me-3 text-secondary  text-center rounded-r-full shadow-lg w-full hover:bg-primaryLight hover:text-primary"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-18 py-5 sm:pt-5  ml-3 text-secondary  text-center rounded-l-full shadow-lg w-full hover:bg-primaryLight hover:text-tertiary hover:text-primary"
            >
              Registrar
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};
