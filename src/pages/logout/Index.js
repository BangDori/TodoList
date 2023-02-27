// Logout index page
import React from 'react';
import LogoutBox from '../../styles/pages/LogoutBox';

const Index = ({ onLogout }) => {
  return (
    <LogoutBox>
      <button onClick={() => onLogout({ name: '', status: false })}>
        Logout
      </button>
    </LogoutBox>
  );
};

export default Index;
