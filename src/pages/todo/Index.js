// Todo index page
import React from 'react';
import TodoTemplate from './TodoTemplate';

const Index = ({ isLogin }) => {
  if (!isLogin.status) {
    // 로그인 되지 않았을 경우
    return (
      <>
        <h3 style={{ color: 'red' }}>로그인 후 이용가능한 시스템입니다.</h3>
      </>
    );
  }

  // 로그인 되었을 경우
  return <TodoTemplate isLogin={isLogin} />;
};

export default Index;
