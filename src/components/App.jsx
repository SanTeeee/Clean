import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Authentication/Login/Login";
import Error404 from "./Error404";
import Admin from "./Authentication/Admin/Admin";
import User from "./Authentication/User/User";
import Register from "./Authentication/Register/Register";
import DashboardContainer from "./DashboardContainer";
import Dashboard from "./User Dashboard/DashboardBody/Dashboard/Column-One/Dashboard";
import Client from "./User Dashboard/DashboardBody/Client";
import Inventory from "./User Dashboard/DashboardBody/Inventory";
import Orders from "./User Dashboard/DashboardBody/Orders";
import Tracking from "./User Dashboard/DashboardBody/Tracking";
import Settings from "./User Dashboard/DashboardBody/Settings";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="User" element={<User />} />
        <Route path="Sign-up" element={<Register />} />

        <Route path="Dashboard" element={<DashboardContainer />}>
          <Route index element={<Dashboard />} />
          <Route path="Welcome" element={<Dashboard />} />
          <Route path="Client" element={<Client />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Tracking" element={<Tracking />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
