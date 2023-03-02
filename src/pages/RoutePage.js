// Routing page
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListBox from '../styles/pages/ListBox';
import HomeIndex from './home/Index';
import RegisterIndex from './register/IndexContainer';
import LoginIndex from './login/IndexContainer';
import LogoutIndex from './logout/Index';
import TodoIndex from './todo/Index';
import NotFound from './NotFound';

const RoutePage = () => {
  const { status } = useSelector((state) => state.users);

  return (
    <ListBox>
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/register' element={<RegisterIndex />} />
        {status ? (
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
