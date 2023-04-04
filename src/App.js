import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./pages/SignIn";
// import Dashboard from "./components/dashboard/pages/Dashboard";
import SideNav from "./components/dashboard/sideNav";

// const isUserLogedIn = localStorage.getItem("userLogedIn");

function App() {
  // const currentUrl = useLocation().pathname;
  return (
    <>
      <Routes>
        <Route path="" element={<SignUp />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="dashboard" element={<SideNav/>} />

      </Routes>
      {/* {isUserLogedIn && currentUrl.includes("/dash") ? (
        <SideNav>
          <Routes>
            <Route path="/dash/dashboard" element={<Dashboard />} />
          </Routes>
        </SideNav>
      ) : (
        <></>
      )} */}
    </>
  );
}

export default App;
