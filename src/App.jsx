import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dictionary from "./pages/Dictionary";
import Recommend from "./pages/Recommend";
import Training from "./pages/Training";

function App() {
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
    </>
  );
}

export default App;
