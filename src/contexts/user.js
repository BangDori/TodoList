import { createContext, useState } from 'react';

const UserContext = createContext({
  state: { id: '', name: '', status: false },
  actions: {
    setIsLogin: () => {},
  },
});

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState({
    id: '',
    name: '',
    status: false,
  });

  const value = {
    state: { isLogin },
    actions: { setIsLogin },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };
export default UserContext;
