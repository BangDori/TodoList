import styled from "styled-components";
import React, { useCallback, useState } from "react";

const RegisterBox = styled.form`
  text-align: center;

  & .title {
    margin: 8px 0 24px;
    font-size: 32px;
    font-weight: bold;
    color: #ffc0cb;
  }

  & input {
    display: block;

    width: 320px;
    height: 44px;
    border-radius: 10px;

    padding-inline-start: 24px;
    background: #ecf2ff;

    opacity: 0.7;
    border: none;
  }

  & input:focus {
    outline: 3px solid #ea8fea;
  }

  & input + input {
    margin: 8px 0;
  }

  & button {
    width: 144px;
    height: 48px;
    font-size: 12px;
    border: none;
    border-radius: 10px;

    background: #85cdfd;
    font-weight: bold;

    margin: 24px 4px 0 4px;
    cursor: pointer;
  }
`;

const Register = () => {
  const [form, setForm] = useState({
    user_id: "",
    user_password: "",
    user_nickname: "",
  });

  const { user_id, user_password, user_nickname } = form;

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
    e.preventDefault();

    setForm({
      user_id: "",
      user_password: "",
      user_nickname: "",
    });
  };

  return (
    <RegisterBox action="" method="post" onSubmit={onSubmit}>
      <div className="title">Register</div>
      {/* 화면 진입 시 Input ID를 가리키도록 활성화 필요 */}
      <input
        name="user_id"
        placeholder="Input ID"
        value={user_id}
        onChange={onChange}
      />
      <input
        name="user_password"
        placeholder="Input Password"
        value={user_password}
        onChange={onChange}
      />
      <input
        name="user_nickname"
        placeholder="Input Nickname"
        value={user_nickname}
        onChange={onChange}
      />

      <button type="submit">Submit</button>
    </RegisterBox>
  );
};

export default Register;
