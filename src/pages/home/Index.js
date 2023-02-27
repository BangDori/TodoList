// Home index page
import React, { useRef } from 'react';
import { useTimer } from '../../hooks/useTimer';
import HomeBox from '../../styles/pages/HomeBox';

const Index = () => {
  // 리렌더링이 아닌, 요소 내부의 값만을 변경시켜 주기 위해 useRef hook 사용
  const clock = useRef(null);

  // useTimer 이라는 custom hook 사용
  useTimer({ clock });

  return (
    <HomeBox>
      {/* 시계 기능 추가 필요 */}
      <div ref={clock} className='timer'>
        --:--:--
      </div>
      <img src='/todo-list.png' alt='todo logo' />
    </HomeBox>
  );
};

export default Index;
