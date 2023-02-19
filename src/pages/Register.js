import React, { useCallback, useState } from "react";
import RegisterBox from "../styles/pages/RegisterBox";

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
    // 회원가입 성공, 실패 시나리오 추가 필요 + 페이지 이동
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
