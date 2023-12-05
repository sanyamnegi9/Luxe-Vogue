import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserStatusContext } from "../contexts/UserStatusContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserStatusContext);

  return (
    <div>
      <h2>{`Hello, ${user?.name}`}</h2>
      <Link onClick={() => setUser(null)} to="/login">
        Logout
      </Link>
    </div>
  );
};

export default Dashboard;
