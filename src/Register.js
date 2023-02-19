import styled from "styled-components";
import React from "react";

const RegisterBox = styled.form`
  text-align: center;

  & .title {
    margin: 8px 0;
    font-size: 32px;
    font-weight: bold;
    color: #ad7be9;
  }

  & input {
    display: block;

    width: 288px;
    height: 36px;
    border-radius: 10px;

    padding-inline-start: 24px;
    background: #ecf2ff;

    opacity: 0.7;
    border: none;
  }

  & input:focus {
    outline: none;
    border: 3px solid #ea8fea;
  }

  & input + input {
    margin: 8px 0 32px;
  }

  & button {
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 10px;

    background: #e5d1fa;
    font-weight: bold;

    padding: 5px 15px;
    margin: 0 4px;
    cursor: pointer;
  }
`;

const Register = () => {
  return (
    <RegisterBox>
      <div className="title">Register</div>
      <input name="user_id" placeholder="Input ID" />
      <input name="user_pwd" placeholder="Input Password" />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </RegisterBox>
  );
};

export default Register;
