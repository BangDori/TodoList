import React, { useEffect, useRef, useState } from 'react';
import LoginBox from '../styles/pages/LoginBox';
import Modal from '../components/Modal';

const Login = ({ loginForm, onChange, onSubmit }) => {
  const [modal, setModal] = useState({
    param: '',
    visible: false,
  });
  const { user_id, user_password } = loginForm;
  const ID = useRef(null);
  const Message = useRef(null);

  const show = (param) => setModal({ param, visible: true });
  const hide = () => setModal({ param: '', visible: false });

  useEffect(() => {
    ID.current.focus();
  }, []);

  return (
    <LoginBox>
      <form action='' method='post' onSubmit={(e) => onSubmit(e, Message)}>
        <div className='title'>Login</div>
        <input
          ref={ID}
          name='user_id'
          value={user_id}
          onChange={onChange}
          placeholder='Input ID'
        />
        <input
          type='password'
          name='user_password'
          value={user_password}
          onChange={onChange}
          placeholder='Input Password'
        />
        <button className='login_button' type='submit'>
          Login
        </button>
      </form>

      <div className='find'>
        <button onClick={() => show('id')}>아이디 찾기</button>
        <button onClick={() => show('password')}>비밀번호 찾기</button>
      </div>

      <p ref={Message}></p>
      {modal.visible ? (
        <Modal subject={modal.param} visible={modal.visible} onHide={hide} />
      ) : null}
    </LoginBox>
  );
};

export default Login;
