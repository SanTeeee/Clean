import HomeComponent from "../HomeComponent";
import Auth from "../Auth";
import "./Register.css";
const Register = () => {
  return (
    <div className="RegisterWrap">
      <HomeComponent />
      <p className="firstP">Create an account</p>
      <Auth
        email=" Company/Business name"
        register="Login"
        button="Register"
        link="/Login"
        account="Already have an account?"
      />
    </div>
  );
};

export default Register;
