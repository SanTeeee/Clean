import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const HomeComponent = () => {
  const styles = {
    position: "absolute",
    top: "20px",
    left: "50px",
    display: "flex",
    alignItems: "center",
    columnGap: "5px",
    color: "#287bdd",
  };
  return (
    <div>
      <NavLink to={"/"} style={styles}>
        <HiArrowLeft />
        Home
      </NavLink>
    </div>
  );
};

export default HomeComponent;
