import React from "react";
import TodoTemplate from "./todo/TodoTemplate";

const Todos = ({ isLogin }) => {
  if (!isLogin.status) {
    return (
      <>
        <h3 style={{ color: "red" }}>로그인 후 이용가능한 시스템입니다.</h3>
      </>
    );
  }

  return <TodoTemplate isLogin={isLogin} />;
};

export default Todos;
