import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import {
  selectisCheckingAuth,
  selectLoggedIn,
} from "../redux/auth/selectorsAuth";

const RestrictedRoute = ({ component, redirectTo }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isChecking = useSelector(selectisCheckingAuth);
  console.log("isLoggedIn", isLoggedIn);
  if (isChecking) return null;
  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }
  return component;
};

export default RestrictedRoute;
