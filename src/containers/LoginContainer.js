import { useCallback, useState } from "react";
import Login from "../pages/Login";
import { login } from "../utils/user";

const LoginContainer = ({ onLogin }) => {
  const [form, setForm] = useState({
    user_id: "",
    user_password: "",
  });

  const onChange = useCallback(
    (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );

  const onSubmit = async (e, message) => {
    // 로그인 성공, 실패 시나리오 추가 + 페이지 이동
    e.preventDefault();

    try {
      const name = await login(form);

      setForm({
        user_id: "",
        user_password: "",
      });

      onLogin({ name, status: true });
    } catch (e) {
      message.current.textContent = e.message;
    }
  };

  return <Login loginForm={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginContainer;
