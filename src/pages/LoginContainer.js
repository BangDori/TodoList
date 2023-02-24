import { useCallback, useState } from 'react';
import Login from './Login';
import { login } from '../services/user';

const LoginContainer = ({ onLogin }) => {
  const [form, setForm] = useState({
    user_id: '',
    user_password: '',
  });

  const onChange = useCallback(
    (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form],
  );

  const onSubmit = async (e, message) => {
    e.preventDefault();

    try {
      const user = await login(form);

      setForm({
        user_id: '',
        user_password: '',
      });

      onLogin({ id: user[0].id, name: user[0].user_name, status: true });
    } catch (e) {
      message.current.textContent = e.message;

      setTimeout(() => {
        message.current.textContent = '';
      }, 3000);
    }
  };

  return <Login loginForm={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginContainer;
