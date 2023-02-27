import { useState, useRef } from 'react';
import ModalBox from '../styles/pages/Modal';
import 'rodal/lib/rodal.css';
// 모달창 구현을 위해 rodal 라이브러리 사용
import Rodal from 'rodal';
import { findUser } from '../services/user';

const Modal = ({ subject, visible, onHide }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const Message = useRef(null);
  const onClick = async () => {
    try {
      if (subject === 'id') {
        /**
         * 유저의 아이디 검색
         * 이름, 타입 전달
         */
        const searchID = await findUser(name, 'name');
        Message.current.textContent = `ID: ${searchID[0].user_id}`;
      } else {
        /**
         * 유저의 비밀번호 검색
         * 아이디, 타입 전달
         */
        const searchPWD = await findUser(id, 'id');
        Message.current.textContent = `Password: ${searchPWD[0].user_password}`;
      }
    } catch (e) {
      // 에러메시지
      Message.current.textContent = e.message;
      setTimeout(() => {
        Message.current.textContent = '';
      }, 3000);
    }

    setName('');
    setId('');
  };

  return (
    <ModalBox>
      <Rodal visible={visible} onClose={onHide}>
        <div className='modal_title'>
          {subject === 'id' ? 'Find ID' : 'Find Password'}
        </div>

        {subject === 'id' ? (
          <input
            name='name'
            placeholder='Input Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <input
            name='id'
            placeholder='Input ID'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        )}

        <button className='login_button search' onClick={onClick}>
          Click
        </button>
        <div ref={Message} className='message_box'></div>
      </Rodal>
    </ModalBox>
  );
};

export default Modal;
