import { useState } from 'react';
import Menu from './components/Menu';
import RoutePage from './pages/RoutePage';
import Box from './styles/Box';

const App = () => {
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
