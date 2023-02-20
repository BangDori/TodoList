import TodosBox from "../styles/pages/TodosBox";

const Todos = ({ isLogin }) => {
  if (!isLogin.status) {
    return (
      <TodosBox>
        <h3 className="default-todos">로그인 후 이용가능한 시스템입니다.</h3>
      </TodosBox>
    );
  } else {
    return (
      <TodosBox>
        <p className="title">
          <strong>Todo List</strong>
        </p>
      </TodosBox>
    );
  }
};

export default Todos;
