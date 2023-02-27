import { useState } from 'react';
import Menu from './components/Menu';
import RoutePage from './pages/RoutePage';
import Box from './styles/Box';

const App = () => {
  // useState 훅을 이용해, 사용자의 id와 이름, 로그인 상태를 저장
  const [isLogin, setIsLogin] = useState({
    id: '',
    name: '',
    status: false,
  });

  return (
    <Box>
      <Menu isLogin={isLogin} onLogout={setIsLogin} />
      <RoutePage isLogin={isLogin} onLogin={setIsLogin} />
    </Box>
  );
};

export default App;
