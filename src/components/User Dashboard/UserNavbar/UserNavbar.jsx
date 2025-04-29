import Icon from "../../../assets/CT Icon.png";
import "./UserNavbar.css";
import UserComponent from "./UserComponent";
const UserNavbar = () => {
  return (
    <div>
      <div className="UserNavContainer">
        <div className="logo">
          <img src={Icon} alt="" />
          <header>CLEANTRACK</header>
        </div>

        <div className="login">
          <UserComponent />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
