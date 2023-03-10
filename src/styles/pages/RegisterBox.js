import styled from 'styled-components';

const RegisterBox = styled.form`
  position: relative;
  text-align: center;

  & .title {
    margin: 8px 0 24px;
    font-size: 32px;
    font-weight: bold;
    color: #ffc0cb;
  }

  & input {
    display: block;

    width: 320px;
    height: 44px;
    border-radius: 10px;

    padding-inline-start: 24px;
    background: #ecf2ff;

    opacity: 0.7;
    border: none;
  }

  & input:focus {
    outline: 3px solid #ea8fea;
  }

  & input + input {
    margin: 8px 0;
  }

  & button {
    width: 144px;
    height: 48px;
    font-size: 12px;
    border: none;
    border-radius: 10px;

    background: #85cdfd;
    font-weight: bold;

    margin: 24px 4px 0 4px;
    cursor: pointer;
  }

  & p {
    position: absolute;
    color: red;
    bottom: -58px;
  }
`;

export default RegisterBox;
