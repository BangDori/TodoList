import { Route, Routes, useNavigate } from 'react-router-dom';
import ListBox from '../styles/pages/ListBox';
import HomeIndex from './home/Index';
import RegisterIndex from './register/IndexContainer';
import LoginIndex from './login/IndexContainer';
import LogoutIndex from './logout/Index';
import TodoIndex from './todo/Index';
import NotFound from './NotFound';

const RoutePage = ({ isLogin, onLogin }) => {
  const navigate = useNavigate();

  const onClick = (form) => {
    onLogin(form);
    navigate('/');
  };

  return (
    <ListBox>
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/register' element={<RegisterIndex />} />
        {isLogin.status ? (
          <Route path='/logout' element={<LogoutIndex onLogout={onClick} />} />
        ) : (
          <Route path='/login' element={<LoginIndex onLogin={onClick} />} />
        )}
        <Route path='/todos' element={<TodoIndex isLogin={isLogin} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </ListBox>
  );
};

export default RoutePage;
