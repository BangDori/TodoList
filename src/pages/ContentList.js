import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Todos from "./Todos";
import ListBox from "../styles/pages/ListBox";

const ContentList = () => {
  return (
    <ListBox>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </ListBox>
  );
};

export default ContentList;
