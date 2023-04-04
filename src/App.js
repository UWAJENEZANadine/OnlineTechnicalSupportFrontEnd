import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./pages/SignIn";

import SideNav from "./Component/dashboard/sideNav";
import Header from "./Component/Header";
import HomePage from "./pages/HomePage";
import Footer from "./Component/Footer";
function App() {
 
  return (

    <>
      {/* <Routes>
        <Route path="" element={<SignUp />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="dashboard" element={<SideNav/>} />

      </Routes> */}
      {/* {isUserLogedIn && currentUrl.includes("/dash") ? (
        <SideNav>
          <Routes>
            <Route path="/dash/dashboard" element={<Dashboard />} />
          </Routes>
        </SideNav>
      ) : (
        <></>
      )} */}

      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />



      </Routes>
      <Footer />


    </>
  );
}

export default App;
