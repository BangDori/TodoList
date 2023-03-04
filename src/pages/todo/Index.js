// Todo index page
import React from 'react';
import loadable from '@loadable/component';
const TodoTemplate = loadable(() => import('./TodoTemplate'));

const Index = () => {
  // 로그인 되었을 경우
  return <TodoTemplate />;
};

export default Index;
