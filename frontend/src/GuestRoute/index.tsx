import React from "react";
import { Navigate } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  redirect?: string;
};

const GuestRoute: React.FC<Props> = ({ children, redirect = "/" }) => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  let location = useLocation();

  // console.log(isAuth);

  return !isAuth ? (
    <>{children}</>
  ) : (
    <Navigate to={redirect} state={{ from: location }} replace />
  );
};

export default GuestRoute;
