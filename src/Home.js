import styled from "styled-components";
import React from "react";

const HomeBox = styled.div`
  text-align: center;

  & div {
    margin: 8px 0;
    font-size: 32px !important;
    font-weight: 700;
    letter-spacing: 2.4px;
    color: #ad7be9;
  }

  & img {
    width: 144px;
    vertical-align: middle;
  }
`;

const Home = () => {
  return (
    <HomeBox>
      <div>00:00:00</div>
      <img src="/todo-list.png" alt="todo logo" />
    </HomeBox>
  );
};

export default Home;
