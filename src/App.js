import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<SignUp/>} />
      <Route path="SignUp" element={<SignUp/>} />
      <Route path="SignIn" element={<SignIn/>} />
    </Routes>
    
      </>
  );
}

export default App;
