import { useState } from "react";
import UserNavbar from "./User Dashboard/UserNavbar/UserNavbar";
import UserSidebar from "./User Dashboard/UserSidebar/UserSidebar";
// import DashboardBody from "./User Dashboard/DashboardBody/DashboardBody";
// import Navbar from "./LandingPage/Navbar/Navbar";

const DashboardContainer = () => {
  // Define state and handler inside the component
  const [collapse, setCollapse] = useState(false);

  function handleCollapse() {
    setCollapse(!collapse);
  }

  return (
    <div>
      <UserNavbar />

      <div className="dashboardContainer">
        {/* Pass collapse and handleCollapse as props */}
        <UserSidebar handleCollapse={handleCollapse} collapse={collapse} />
      </div>
    </div>
  );
};

export default DashboardContainer;
