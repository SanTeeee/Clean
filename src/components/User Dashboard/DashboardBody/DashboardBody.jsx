import "./../UserSidebar/UserSidebar.css";
import { Outlet } from "react-router-dom";

// This component renders anything clicked on the sidebar
// The 'outlet' is for receiving the components that matches the clicked route link

const DashboardBody = ({ collapse }) => {
  // const className = "dashboardContent";
  // const collapsedClassName = "collapsedDashboardContent";
  return (
    <div className={`dashboardContent ${collapse ? " collapse" : ""}`}>
      <Outlet context={{ collapse }} />
    </div>
  );
};

export default DashboardBody;
