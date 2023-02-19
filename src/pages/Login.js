import React, { useCallback, useState } from "react";
import LoginBox from "../styles/pages/LoginBox";

const Login = () => {
  const [form, setForm] = useState({
    user_id: "",
    user_password: "",
  });

  const { user_id, user_password } = form;

  const onChange = useCallback(
    (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );

  const onSubmit = (e) => {
    // 로그인 성공, 실패 시나리오 추가 + 페이지 이동
    e.preventDefault();
    setForm({
      user_id: "",
      user_password: "",
    });
  };

  return (
    <LoginBox action="" method="post">
      <div className="title">Login</div>
      {/* 화면 진입 시 Input ID를 가리키도록 활성화 필요 */}
      <input
        name="user_id"
        value={user_id}
        onChange={onChange}
        placeholder="Input ID"
      />
      <input
        name="user_password"
        value={user_password}
        onChange={onChange}
        placeholder="Input Password"
      />
      <button type="submit" onSubmit={onSubmit}>
        Login
      </button>

      <div className="find">
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
      </div>
    </LoginBox>
  );
};

export default Login;
