import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dictionary from "./pages/Dictionary";
import Recommend from "./pages/Recommend";
import Training from "./pages/Training";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn, selectToken } from "./redux/auth/selectorsAuth";
import { useEffect } from "react";
import { getCurrentUserThunk } from "./redux/auth/operationsAuth";
import { ToastContainer } from "react-toastify";

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    if (!token) return;
    dispatch(getCurrentUserThunk(token));
  }, [token, dispatch]);
  console.log(isLoggedIn);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          <Route path="/recommend" element={<Recommend />}></Route>
          <Route path="/training" element={<Training />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
