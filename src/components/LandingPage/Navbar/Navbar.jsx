import "./Navbar.css";
import Icon from "../../../assets/CT Icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logo">
        <img src={Icon} alt="" />
        <header>CLEANTRACK</header>
      </div>

      <div className="navLinks">
        <a href="#howItWorks">How it works</a>
        <NavLink to="/Dashboard">Dashboard</NavLink>
        <a href="#personalized">Services</a>
      </div>
      <div className="login">
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Sign-up">
          <button>Register</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
