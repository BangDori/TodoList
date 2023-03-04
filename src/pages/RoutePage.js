// Routing page
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListBox from '../styles/pages/ListBox';
import loadable from '@loadable/component';

const HomeIndex = loadable(() => import('./home/Index'));
const RegisterIndex = loadable(() => import('./register/IndexContainer'));
const LoginIndex = loadable(() => import('./login/IndexContainer'));
const LogoutIndex = loadable(() => import('./logout/Index'));
const TodoIndex = loadable(() => import('./todo/Index'));
const NotFound = loadable(() => import('./NotFound'));

const RoutePage = () => {
  const { status } = useSelector((state) => state.user);

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
        {status ? (
          <Route path='/todos' element={<TodoIndex />} />
        ) : (
          <Route path='/todos' element={<NotFound type='login' />} />
        )}
        <Route path='/*' element={<NotFound type='path' />} />
      </Routes>
    </ListBox>
  );
};

export default RoutePage;
