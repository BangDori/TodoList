import Menu from './components/Menu';
import { UserProvider } from './contexts/user';
import RoutePage from './pages/RoutePage';
import Box from './styles/Box';

const App = () => {
  return (
    <UserProvider>
      <Box>
        <Menu />
        <RoutePage />
      </Box>
    </UserProvider>
  );
};

export default App;
