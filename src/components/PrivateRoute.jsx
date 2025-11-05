import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { selectLoggedIn } from "../redux/auth/selectorsAuth";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
