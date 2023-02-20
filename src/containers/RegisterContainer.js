import Register from "../pages/Register";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/user";
import {
  validation,
  validationID,
  validationPWD,
  validationName,
  checkRegister,
} from "../utils/register";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user_name: "",
    user_id: "",
    user_password: "",
  });

  const onChange = useCallback(
    (e, ref) => {
      if (e.target.name === "user_id") {
        validation(e.target, ref, validationID);
      } else if (e.target.name === "user_password") {
        validation(e.target, ref, validationPWD);
      } else if (e.target.name === "user_name") {
        validation(e.target, ref, validationName);
      }

      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );

  const onSubmit = async (e, ID, Message) => {
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
    <Register registerForm={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default RegisterContainer;