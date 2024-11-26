import React from "react";
import HomeComponent from "../HomeComponent";
import Auth from "../Auth";
Auth;
function User() {
  return (
    <div>
      <HomeComponent />
      <div className="LoginWrap">
        <p className="welcome">Welcome back</p>
        <Auth
          email="Company name or email"
          register="Register"
          button="Login"
          link="/Sign-up"
          account="Don't have an account?"
        />
      </div>
    </div>
  );
}

export default User;
