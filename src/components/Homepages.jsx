//index
import { Link } from "react-router-dom";

export const Homepages = () => {
  return (
    <>
      <h1 className="text-centre">Homepages</h1>
      <Link to="/login" className="login bg-dark">
        Login
      </Link>
    </>
  );
};
