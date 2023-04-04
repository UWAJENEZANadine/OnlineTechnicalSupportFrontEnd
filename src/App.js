import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Header from "./Component/Header";
import HomePage from "./pages/HomePage";
import Footer from "./Component/Footer";
function App() {
  return (

    <>
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
