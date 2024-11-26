import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { GiSprint } from "react-icons/gi";

import { CiSettings } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";

import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import DashboardBody from "../DashboardBody/DashboardBody";

const UserSidebar = ({ handleCollapse, collapse }) => {
  return (
    <>
      <div className={`userSidebar ${collapse ? "collapse" : ""} `}>
        <div className="collapse-icon" onClick={handleCollapse}>
          {collapse ? <RiArrowRightDoubleFill /> : <RiArrowLeftDoubleFill />}
        </div>

        <NavLink to="Welcome">
          <BiSolidDashboard />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="Client">
          <MdOutlineManageAccounts />
          <span>Client</span>
        </NavLink>
        <NavLink to="Inventory">
          <BiNotepad />
          <span>Inventory</span>
        </NavLink>
        <NavLink to="Orders">
          <FaRegEdit />
          <span>Orders</span>
        </NavLink>
        <NavLink to="Tracking">
          <GiSprint />
          <span>Tracking</span>
        </NavLink>
        <NavLink to="Settings">
          <CiSettings />
          <span>Settings</span>
        </NavLink>

        {/* Logout */}
        <div className="logout">
          <NavLink to="/">
            <LuLogOut />
            <span>Log out</span>
          </NavLink>
        </div>
      </div>
      <DashboardBody collapse={collapse} handleCollapse={handleCollapse} />;
    </>
  );
};

export default UserSidebar;
