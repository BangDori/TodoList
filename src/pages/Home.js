import React, { useRef } from "react";
import { useTimer } from "../hooks/useTimer";
import HomeBox from "../styles/pages/HomeBox";

const Home = () => {
  const clock = useRef(null);

  useTimer({ clock });

  return (
    <HomeBox>
      {/* 시계 기능 추가 필요 */}
      <div ref={clock} className="timer">
        --:--:--
      </div>
      <img src="/todo-list.png" alt="todo logo" />
    </HomeBox>
  );
};

export default Home;
