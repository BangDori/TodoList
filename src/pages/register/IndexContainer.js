// Register Container
import Register from './Index';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/user';
import {
  validation,
  validationID,
  validationPWD,
  validationName,
  checkRegister,
} from '../../utils/register';

const IndexContainer = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user_name: '',
    user_id: '',
    user_password: '',
  });
  const id = useRef(3);

  const onChange = useCallback(
    (e, ref) => {
      // 아이디, 비밀번호, 이름에 대한 유효성 검사
      if (e.target.name === 'user_id') {
        validation(e.target, ref, validationID);
      } else if (e.target.name === 'user_password') {
        validation(e.target, ref, validationPWD);
      } else if (e.target.name === 'user_name') {
        validation(e.target, ref, validationName);
      }

      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form],
  );

  const onSubmit = async (e, ID, Message) => {
    e.preventDefault();
    // checkRegister 함수를 통해 회원가입 정보가 올바르게 입력되었는지 확인
    if (checkRegister()) {
      // 회원가입 정보 서버에 등록
      await register(form);

      id.current += 1;
      setForm({
        user_name: '',
        user_id: '',
        user_password: '',
      });

      navigate('/');
    } else {
      ID.current.focus();
      Message.current.textContent = '회원가입 정보를 확인해주세요.';

      setTimeout(() => {
        Message.current.textContent = '';
      }, 3000);
    }
  };

  return (
    <Register registerForm={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default IndexContainer;
