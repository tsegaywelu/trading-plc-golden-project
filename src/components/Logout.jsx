import React from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  // Clear local storage
  localStorage.clear();

  // Redirect to login
  return <Navigate to="/login" />;
};

export default Logout;
