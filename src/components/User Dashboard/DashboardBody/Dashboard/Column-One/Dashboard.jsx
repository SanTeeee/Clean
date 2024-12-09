import React, { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import "./Column-One.css";
import {
  MdOutlineSchedule,
  MdOutlineShoppingCart,
  MdOutlineTask,
} from "react-icons/md";
import Chart from "./Chart";
import Table from "./Table";
import Calendar from "../Column-Two/Calendar";
import OrderSummary from "../Column-Two/OrderSummary";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(true); // State for selected user in the table component

  const boxOne = [
    {
      icon: <MdOutlineShoppingCart />,
      para: "Total Order",
      number: "3456",
      icon2: <FaArrowTrendUp />,
      percentage: "+4.5%",
      order: "+10 new orders today",
    },
    {
      icon: <MdOutlineSchedule />,
      para: "Pending",
      number: "45",
      icon2: <FaArrowTrendUp />,
      percentage: "+3",
      order: "Received 2 hours ago",
    },
    {
      icon: <MdOutlineTask />,
      para: "Completed",
      number: "110",
      icon2: <FaArrowTrendUp />,
      percentage: "+15%",
      order: "Completed today",
    },
  ];

  const styles = [
    {}, // Default empty style for id === 0
    { backgroundColor: "#ffe8cc", color: "#eda145" },
    { backgroundColor: "#d2ffe5", color: "#2ECC71" },
  ];

  const renderedBoxes = boxOne.map((box, id) => (
    <div className="box-one" key={id}>
      <div className="total-order">
        <div className="cart" style={styles[id] || {}}>
          {box.icon}
        </div>
        <p>{box.para}</p>
      </div>
      <h1>{box.number}</h1>
      <div className="time-stamp">
        <div className="trend" style={styles[id] || {}}>
          {id === 1 ? (
            ""
          ) : (
            <div
              className="trend-up"
              style={
                id === 0 || id === 2
                  ? { border: `3px solid ${id === 2 ? "#2ECC71" : ""} ` }
                  : {}
              }
            >
              {box.icon2}
            </div>
          )}
          {box.percentage}
        </div>
        {box.order}
      </div>
    </div>
  ));
  const { collapse } = useOutletContext();
  return (
    <div className="dashboard">
      {/* {"1st column not considering sidebar"} */}

      <div className={`column-one ${collapse ? "collapse" : ""}`}>
        <h1>Welcome</h1>
        <div className="box">{renderedBoxes}</div>
        <Chart />
        <Table
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          collapse={collapse}
        />
      </div>

      {/* "2nd column not considering sidebar" */}
      <div className="column-two">
        <Calendar />
        <OrderSummary selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Dashboard;
