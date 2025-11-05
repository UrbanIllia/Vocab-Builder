import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { selectLoggedIn } from "../redux/auth/selectorsAuth";

const RestrictedRoute = ({ component, redirectTo }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }
  return component;
};

export default RestrictedRoute;
