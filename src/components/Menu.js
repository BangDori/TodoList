import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import React from "react";
import MenuBox from "../styles/components/MenuBox";

const Menu = ({ isLogin }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <MenuBox>
      <div className="menu_list">
        {isLogin.status ? <h3>{isLogin.name}님 환영합니다.</h3> : null}
        <ul>
          <li>
            <Link to="/" className={cn({ selected: pathname === "/" })}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className={cn({ selected: pathname === "/register" })}
            >
              Register
            </Link>
          </li>
          <li>
            {isLogin.status ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link
                to="/login"
                className={cn({ selected: pathname === "/login" })}
              >
                Login
              </Link>
            )}
          </li>
          <li>
            <Link
              to="/todos"
              className={cn({ selected: pathname === "/todos" })}
            >
              Todos
            </Link>
          </li>
        </ul>
      </div>
    </MenuBox>
  );
};

export default Menu;
