import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLogged = localStorage.getItem("token");

  if (isLogged) {
    return <Outlet />;
  }
  {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
