import React from "react";
import "./Admin.css";
import HomeComponent from "../HomeComponent";
import Auth from "../Auth.jsx";

function Admin() {
  return (
    <div>
      <HomeComponent />
      <div className="LoginWrap">
        <p className="welcome">Welcome back</p>
        <Auth
          email="Email"
          button="Login"
          register="Register"
          link="/Sign-up"
          account="Don't have an account?"
        />
      </div>
    </div>
  );
}

export default Admin;
