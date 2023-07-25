//index
import { Link } from "react-router-dom";
import { LoginGoogle } from "../components/LoginGoogle";

export const StartPage = () => {
  return (
    <>
      <h1 className="text-centre">Login</h1>
      <Link to="/login" className="login bg-dark">
        Login
      </Link>
      <Link to="/register" className="login bg-dark">
        Sign up
      </Link>
      <LoginGoogle />
    </>
  );
};
