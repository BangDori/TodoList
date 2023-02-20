import React, { useCallback, useEffect, useRef, useState } from "react";
import RegisterBox from "../styles/pages/RegisterBox";
import { useNavigate } from "react-router-dom";
import {
  validation,
  validationID,
  validationPWD,
  validationName,
  checkRegister,
} from "../utils/register";
import { register } from "../utils/user";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user_name: "",
    user_id: "",
    user_password: "",
  });
  const { user_id, user_password, user_name } = form;
  const ID = useRef(null);
  const PWD = useRef(null);
  const Name = useRef(null);
  const Message = useRef(null);

  useEffect(() => {
    ID.current.focus();
  }, []);

  const onChange = useCallback(
    (e) => {
      if (e.target.name === "user_id") {
        validation(e.target, ID, validationID);
      } else if (e.target.name === "user_password") {
        validation(e.target, PWD, validationPWD);
      } else if (e.target.name === "user_name") {
        validation(e.target, Name, validationName);
      }

      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );

  const onSubmit = async (e) => {
    // 회원가입 성공, 실패 시나리오 추가 필요 + 페이지 이동
    e.preventDefault();
    if (checkRegister()) {
      await register(form);

      setForm({
        user_name: "",
        user_id: "",
        user_password: "",
      });

      navigate("/");
    } else {
      ID.current.focus();
      Message.current.textContent = "회원가입 정보를 확인해주세요.";
    }
  };

  return (
    <RegisterBox action="" method="post" onSubmit={onSubmit}>
      <div className="title">Register</div>
      {/* 화면 진입 시 Input ID를 가리키도록 활성화 필요 */}
      <input
        ref={ID}
        name="user_id"
        placeholder="Input ID"
        value={user_id}
        onChange={onChange}
      />
      <input
        ref={PWD}
        name="user_password"
        placeholder="Input Password"
        value={user_password}
        onChange={onChange}
      />
      <input
        ref={Name}
        name="user_name"
        placeholder="Input Name"
        value={user_name}
        onChange={onChange}
      />

      <button type="submit">Submit</button>
      <p ref={Message}></p>
    </RegisterBox>
  );
};

export default Register;
