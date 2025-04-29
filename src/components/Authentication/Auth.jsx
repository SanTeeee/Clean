import  { useState } from "react";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Auth = (props) => {
  const [eye, setEye] = useState(false);

  const formPreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={formPreventDefault}>
        <div>
          <div className="auth">
            <div className="authContents">
              <p>Enter your details</p>
              <div className="routeToAuth">
                <label htmlFor="email" className="labels" >
                  {props.email}
                </label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  className="AdminInput"
                  required
                  aria-label="Email Address"
                />
              </div>
              <div className="routeToAuth">
                <label htmlFor="password" className="labels">
                  Password
                </label>
                <div className="showPassword">
                  <input
                    placeholder="Enter your password"
                    minLength={5}
                    id="password"
                    type={eye ? "text" : "password"}
                    className="AdminInput"
                    required
                    aria-label="Password"
                  />
                  {eye ? (
                    <FaEyeSlash
                      onClick={() => setEye(!eye)}
                      aria-label="Hide password"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setEye(!eye)}
                      aria-label="Show password"
                    />
                  )}
                </div>
                <div className="forgotPassword">
                  <a href="#">Forgot password?</a>
                  <button type="submit">
                    {props.button} <FaArrowRight />
                  </button>
                  <br />
                  <Link to={props.link}>
                    {props.account}
                    <span>{props.register}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Auth;
