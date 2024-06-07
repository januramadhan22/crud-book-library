import React from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredAuth = () => {
  const location = useLocation();
  const token = Cookies.get("token");

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} />
  );
};

export default RequiredAuth;
