// Login index page
import React, { useCallback, useEffect, useRef, useState } from 'react';
import LoginBox from '../../styles/pages/LoginBox';
import loadable from '@loadable/component';
const Modal = loadable(() => import('../../components/Modal'));

const Index = ({ loginForm, onChange, onSubmit }) => {
  // modal 창 여부를 useState hook을 이용하는 상태를 저장
  const [modal, setModal] = useState({
    param: '', // 아이디 찾기, 비밀번호 찾기 구분
    visible: false, // 모달창을 on, off 구분
  });
  const { user_id, user_password } = loginForm;
  const ID = useRef(null);
  const Message = useRef(null);

  // 모달창을 열였을 경우
  const show = useCallback((param) => setModal({ param, visible: true }), []);
  // 모달창을 닫았을 경우
  const hide = useCallback(() => setModal({ param: '', visible: false }), []);

  useEffect(() => {
    // 로그인 화면에 들어올 시, ID에 focus를 적용시켜 줌으로써 UX 향상
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

export default Index;
