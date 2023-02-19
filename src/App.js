import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Todos from "./Todos";

const fns = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Register",
    link: "/register",
  },
  {
    id: 3,
    title: "Login",
    link: "/login",
  },
  {
    id: 4,
    title: "Todos",
    link: "/todos",
  },
];

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
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

const FnBox = styled.div`
  display: inline-block;
  text-align: center;
  width: 50%;

  & > div {
    width: 320px;
    margin: 0 auto;
    padding: 32px 0;
    text-align: center;

    border: 1px solid #b9f3e4;
  }

  & a {
    font-size: 18px;
  }

  & a:hover {
    color: #a459d1;
  }
`;

const Contents = styled.div`
  display: inline-block;

  width: 50%;
`;

const App = () => {
  return (
    <Box>
      <FnBox>
        <div>
          <ul>
            {fns.map((fn) => (
              <li key={fn.id}>
                <Link to={fn.link}>{fn.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </FnBox>

      <Contents>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Contents>
    </Box>
  );
};

export default App;
