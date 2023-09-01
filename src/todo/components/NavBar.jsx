import { NavLink } from "react-router-dom";
import { Logout } from "../../auth/components/Logout";

export const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-link">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Home
          </NavLink>
        </li>

        <li className="nav-link ">
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            To do list
          </NavLink>
        </li>
        <li className="nav-link ">
          <Logout />
        </li>
      </ul>
    </nav>
  );
};
