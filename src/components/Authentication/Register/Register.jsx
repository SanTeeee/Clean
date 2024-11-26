import React from "react";
import icon from "../../../assets/CT Icon.png";
import HomeComponent from "../HomeComponent";
import Auth from "../Auth";

const Register = () => {
  return (
    <div className="RegisterWrap">
      <HomeComponent />
      <img src={icon} />
      <p className="firstP">Create an account</p>

      <Auth
        email="    Company/Business name"
        register="Login"
        button="Register"
        link="/Login"
        account="Already have an account?"
      />
    </div>
  );
};

export default Register;
