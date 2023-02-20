import React from "react";
import LogoutBox from "../styles/pages/LogoutBox";

const Logout = ({ onLogout }) => {
  return (
    <LogoutBox>
      <button onClick={() => onLogout({ name: "", status: false })}>
        Logout
      </button>
    </LogoutBox>
  );
};

export default Logout;
