import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import React from "react";
import MenuBox from "../styles/components/MenuBox";

const Menu = ({ menus }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <MenuBox>
      <div className="menu_list">
        <ul>
          {menus.map((menu) => {
            return (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className={cn({ selected: menu.link === pathname })}
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </MenuBox>
  );
};

export default Menu;
