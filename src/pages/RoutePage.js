// Routing page
import { Route, Routes } from 'react-router-dom';
import ListBox from '../styles/pages/ListBox';
import HomeIndex from './home/Index';
import RegisterIndex from './register/IndexContainer';
import LoginIndex from './login/IndexContainer';
import LogoutIndex from './logout/Index';
import TodoIndex from './todo/Index';
import NotFound from './NotFound';
import { useContext } from 'react';
import UserContext from '../contexts/user';

const RoutePage = () => {
  const { state } = useContext(UserContext);

  return (
    <ListBox>
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/register' element={<RegisterIndex />} />
        {state.isLogin.status ? (
          <Route path='/logout' element={<LogoutIndex />} />
        ) : (
          <Route path='/login' element={<LoginIndex />} />
        )}
        <Route path='/todos' element={<TodoIndex />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </ListBox>
  );
};

export default RoutePage;
