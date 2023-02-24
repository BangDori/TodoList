import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import Todos from './Todos';
import ListBox from '../styles/pages/ListBox';
import Logout from './Logout';

const ContentList = ({ isLogin, onLogin }) => {
  const navigate = useNavigate();

  const onClick = (form) => {
    onLogin(form);
    navigate('/');
  };

  return (
    <ListBox>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterContainer />} />
        {isLogin.status ? (
          <Route path='/logout' element={<Logout onLogout={onClick} />} />
        ) : (
          <Route path='/login' element={<LoginContainer onLogin={onClick} />} />
        )}
        <Route path='/todos' element={<Todos isLogin={isLogin} />} />
      </Routes>
    </ListBox>
  );
};

export default ContentList;
