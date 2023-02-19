import styled from "styled-components";

const MenuBox = styled.div`
  display: inline-block;
  width: 60%;

  & > .menu_list {
    width: 320px;
    margin: 0 auto;
    padding: 32px 0;
    text-align: center;

    border: 1px solid #b9f3e4;
  }

  & a {
    font-size: 18px !important;
    font-weight: bold;
  }

  & a:hover {
    color: #ffc0cb;
  }

  & .selected {
    color: #a459d1;
  }
`;

export default MenuBox;
