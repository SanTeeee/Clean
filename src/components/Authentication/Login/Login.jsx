
import "./Login.css";
import icon from "../../../assets/CT Icon.png";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import HomeComponent from "../HomeComponent";

const Login = () => {
  const sharedData = (
    <>
      <div className="auth">
        <div className="authContents">
          <p>Choose a login method</p>

          <div className="routeToAuth">
            <h3>Admin Login</h3>
            <Link to={"/Admin"}>
              <p className="Admin">
                Login as an administrator <HiArrowRight />
              </p>
            </Link>
          </div>
          <div to={"/"} className="routeToAuth">
            <h3>User Login</h3>
            <Link to={"/User"}>
              <p className="Admin">
                Login as a user
                <HiArrowRight />
              </p>
            </Link>
          </div>
          <p>
            Don't have an account? &nbsp;{" "}
            <Link to={"/Sign-up"} style={{ color: "#287bdd" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="LoginWrap">
      <HomeComponent />
      <img src={icon} />
      <p className="firstP">Login to continue</p>
      {sharedData}
    </div>
  );
};

export default Login;
