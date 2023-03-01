// Logout index page
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import UserContext from '../../contexts/user';
import LogoutBox from '../../styles/pages/LogoutBox';

const Index = () => {
  const { actions } = useContext(UserContext);
  const navigate = useNavigate();

  const onClick = () => {
    actions.setIsLogin({ id: '', name: '', status: false });
    navigate('/');
  };

  return (
    <LogoutBox>
      {/* 로그아웃 버튼 클릭시, 로그인 상태 초기화  */}
      <button onClick={onClick}>Logout</button>
    </LogoutBox>
  );
};

export default Index;
