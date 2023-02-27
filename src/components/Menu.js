import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import MenuBox from '../styles/components/MenuBox';
/**
 * classnames 라이브러리를 이용하여 현재 메뉴와 선택한 주소의 메뉴를 비교하여
 * 내가 선택한 메뉴를 색상을 이용하여 표시
 */
import cn from 'classnames';

// 메뉴의 이름과 경로를 담은 배열
const menus = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Register',
    link: '/register',
  },
  {
    id: 3,
    title: 'Logout',
    link: '/logout',
  },
  {
    id: 4,
    title: 'Login',
    link: '/login',
  },
  {
    id: 5,
    title: 'Todos',
    link: '/todos',
  },
];

const Menu = ({ isLogin }) => {
  // 현재 브라우저의 url을 받아오기 위해 useLocation hook 사용
  const location = useLocation();
  // useLocation 내부에 pathname 속성에 현재 브라우저의 url이 담겨 있음
  const { pathname } = location;

  return (
    <MenuBox>
      <div className='menu_list'>
        {/* 유저가 로그인 되어 있다면, 유저의 이름을 함께 표시 */}
        {isLogin.status ? <h3>{isLogin.name}님 환영합니다.</h3> : null}
        <ul>
          {menus.map((menu) => {
            if (!isLogin.status && menu.id === 3) return null;
            else if (isLogin.status && menu.id === 4) return null;

            return (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className={cn({ selected: pathname === menu.link })}
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
