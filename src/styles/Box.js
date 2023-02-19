import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  height: 90vh;
  margin: 0 auto;

  & ul,
  & li,
  & div,
  & a {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    color: black;
    font-size: 14px;
  }
`;

export default Box;
