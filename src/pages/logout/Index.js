// Logout index page
import React from 'react';
import LogoutBox from '../../styles/pages/LogoutBox';

const Index = ({ onLogout }) => {
  return (
    <LogoutBox>
      {/* 로그아웃 버튼 클릭시, 로그인 상태 초기화  */}
      <button onClick={() => onLogout({ id: '', name: '', status: false })}>
        Logout
      </button>
    </LogoutBox>
  );
};

export default Index;
