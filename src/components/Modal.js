import { useState, useRef } from 'react';
import ModalBox from '../styles/pages/Modal';
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';
import { findUser } from '../services/user';

const Modal = ({ subject, visible, onHide }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const Message = useRef(null);
  const onClick = async () => {
    try {
      if (subject === 'id') {
        const searchID = await findUser(name, 'name');
        Message.current.textContent = `ID: ${searchID[0].user_id}`;
      } else {
        const searchPWD = await findUser(id, 'id');
        Message.current.textContent = `Password: ${searchPWD[0].user_password}`;
      }
    } catch (e) {
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
