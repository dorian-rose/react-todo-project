import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
