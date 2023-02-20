import React, { useEffect, useRef } from "react";
import LoginBox from "../styles/pages/LoginBox";

const Login = ({ loginForm, onChange, onSubmit }) => {
  const { user_id, user_password } = loginForm;
  const ID = useRef(null);
  const Message = useRef(null);

  useEffect(() => {
    ID.current.focus();
  }, []);

  return (
    <LoginBox action="" method="post" onSubmit={(e) => onSubmit(e, Message)}>
      <div className="title">Login</div>
      <input
        ref={ID}
        name="user_id"
        value={user_id}
        onChange={onChange}
        placeholder="Input ID"
      />
      <input
        type="password"
        name="user_password"
        value={user_password}
        onChange={onChange}
        placeholder="Input Password"
      />
      <button type="submit">Login</button>

      <div className="find">
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
      </div>
      <p ref={Message}></p>
    </LoginBox>
  );
};

export default Login;
