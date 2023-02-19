import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import cn from "classnames";
import React from "react";

const MenuBox = styled.div`
  display: inline-block;
  width: 60%;

  & > .menu_list {
    width: 320px;
    margin: 0 auto;
    padding: 32px 0;
    text-align: center;

    border: 1px solid #b9f3e4;
  }

  & a {
    font-size: 18px !important;
    font-weight: bold;
  }

  & a:hover {
    color: #ffc0cb;
  }

  & .selected {
    color: #a459d1;
  }
`;

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
