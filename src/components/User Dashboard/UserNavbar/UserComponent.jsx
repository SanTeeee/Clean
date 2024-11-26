import React from "react";
import { FaRegBell } from "react-icons/fa6";

import Avatar from "../../../assets/avatar.png";
const UserComponent = () => {
  return (
    <div className="userComponent">
      <FaRegBell />
      <div className="avatar">
        <img src={Avatar} alt="" />
        <div className="avatarInfo">
          <h4>Biola</h4>
          <p>User</p>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
