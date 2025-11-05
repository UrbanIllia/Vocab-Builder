import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import {
  selectisCheckingAuth,
  selectLoggedIn,
} from "../redux/auth/selectorsAuth";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isChecking = useSelector(selectisCheckingAuth);
  if (isChecking) return null;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
