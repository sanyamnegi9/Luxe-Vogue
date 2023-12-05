import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserStatusContext } from "../contexts/UserStatusContext";


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserStatusContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
