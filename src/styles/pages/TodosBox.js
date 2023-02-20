import styled from "styled-components";

const TodosBox = styled.div`
  text-align: center;

  & .default-todos {
    color: red;
  }

  & .title {
    font-size: 24px;
    color: #95bdff;
  }
`;

export default TodosBox;
