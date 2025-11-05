import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectisCheckingAuth, selectToken } from "./redux/auth/selectorsAuth";
import { Suspense, lazy, useEffect } from "react";
import { getCurrentUserThunk } from "./redux/auth/operationsAuth";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import LoaderTwo from "./components/LoaderTwo";

// lazy pages
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Dictionary = lazy(() => import("./pages/Dictionary"));
const Recommend = lazy(() => import("./pages/Recommend"));
const Training = lazy(() => import("./pages/Training"));

function App() {
  const token = useSelector(selectToken);
  const isCheckingAuth = useSelector(selectisCheckingAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(getCurrentUserThunk(token));
  }, [token, dispatch]);

  if (isCheckingAuth) {
    return <LoaderTwo />;
  }
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={<Login />}
                  redirectTo="/dictionary"
                />
              }
            />

            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<Register />}
                  redirectTo="/dictionary"
                />
              }
            />
            <Route
              path="dictionary"
              element={
                <PrivateRoute>
                  <Dictionary />
                </PrivateRoute>
              }
            />
            <Route
              path="recommend"
              element={
                <PrivateRoute>
                  <Recommend />
                </PrivateRoute>
              }
            />
            <Route
              path="training"
              element={
                <PrivateRoute>
                  <Training />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
