// Register index page
import React, { useEffect, useRef } from 'react';
import RegisterBox from '../../styles/pages/RegisterBox';

const Index = ({ registerForm, onChange, onSubmit }) => {
  const { user_id, user_password, user_name } = registerForm;
  const ID = useRef(null);
  const PWD = useRef(null);
  const Name = useRef(null);
  const Message = useRef(null);

  useEffect(() => {
    ID.current.focus();
  }, []);

  return (
    <RegisterBox
      action=''
      method='post'
      onSubmit={(e) => onSubmit(e, ID, Message)}
    >
      <div className='title'>Register</div>
      <input
        ref={ID}
        name='user_id'
        placeholder='Input ID'
        value={user_id}
        onChange={(e) => onChange(e, ID)}
      />
      <input
        ref={PWD}
        type='password'
        name='user_password'
        placeholder='Input Password'
        value={user_password}
        onChange={(e) => onChange(e, PWD)}
      />
      <input
        ref={Name}
        name='user_name'
        placeholder='Input Name'
        value={user_name}
        onChange={(e) => onChange(e, Name)}
      />

      <button type='submit'>Submit</button>
      <p ref={Message}></p>
    </RegisterBox>
  );
};

export default Index;
