// Login Container
import { useCallback, useState } from 'react';
import Login from './Index';
import { login } from '../../services/user';

const IndexContainer = ({ onLogin }) => {
  // 아이디와 비밀번호 입력 상태 관리
  const [form, setForm] = useState({
    user_id: '',
    user_password: '',
  });

  // useCallback을 이용해 함수 재사용
  const onChange = useCallback(
    (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value, // 아이디와 비밀번호 상태 변경
      });
    },
    [form],
  );

  const onSubmit = async (e, message) => {
    e.preventDefault();

    try {
      /**
       * users table에 일치하는 아이디와 비밀번호가 존재하는지 탐색
       * 존재하지 않는다면 에러 처리
       */
      const [{ user_name, user_id }] = await login(form);

      // 로그인에 성공했다면, 로그인 입력창 초기화
      setForm({
        user_id: '',
        user_password: '',
      });

      // 로그인 성공시, app.js에 로그인 유저의 정보 저장
      onLogin({ id: user_id, name: user_name, status: true });
    } catch (e) {
      // 로그인 실패시, 에러 메시지를 화면에 출력
      message.current.textContent = e.message;

      setTimeout(() => {
        message.current.textContent = '';
      }, 3000);
    }
  };

  return <Login loginForm={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default IndexContainer;
