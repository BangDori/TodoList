// Login Container
import { useCallback, useState } from 'react';
import Login from './Index';
import { login } from '../../services/user';

const IndexContainer = ({ onLogin }) => {
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
      const [{ user_name, user_id }] = await login(form);
      setForm({
        user_id: '',
        user_password: '',
      });

      onLogin({ id: user_id, name: user_name, status: true });
    } catch (e) {
      message.current.textContent = e.message;

      setTimeout(() => {
        message.current.textContent = '';
      }, 3000);
    }
  };

  return <Login loginForm={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default IndexContainer;
