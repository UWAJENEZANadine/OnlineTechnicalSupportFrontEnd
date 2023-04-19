import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Routes, Route, Router } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Layout from "./Component/dashbord/Layout";
import Header from "./Component/Header";
import HomePage from "./pages/HomePage";
import Footer from "./Component/Footer";
import Dashboard from "./Component/dashbord/dashboard";
import Experts from "./Component/dashbord/experts";

function App() {
  return (
    <>

      <Routes>      
        <Route path="" element={<HomePage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
      
        <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="experts" element={<Experts />} />
          </Route>
          <Route path="login" element={<div>this is login page</div>}/>
        </Routes>
     
    </>
  );
}

export default App;
