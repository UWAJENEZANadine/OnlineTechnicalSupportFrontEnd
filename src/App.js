import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Routes, Route, Router } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Layout from "./Component/dashbord/Layout";
import HomePage from "./pages/HomePage";
import Dashboard from "./Component/dashbord/dashboard";
import Category from "./Component/dashbord/category";
import Chats from "./Component/dashbord/chats";
import Profile from "./Component/dashbord/profile";
import Schedule from "./Component/dashbord/schedules";
import Settings from "./Component/dashbord/settings";
import Logout from "./Component/dashbord/Logout";
import Technician from "./pages/Technician";
import SupporterSignIn from "./pages/SupporterSignIn";
import Admindashboard from "./Component/admin/admindashboard";
import Adminchats from "./Component/admin/adminchats";
import Admincategory from "./Component/admin/admincategory";
import AdminLayout from "./Component/admin/AdminLayout";



function App() {
  return (

    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="supporter" element={<SupporterSignIn />} />
      </Routes>

      <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="category" element={<Category />} />
            <Route path="chats" element={<Chats/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="schedules" element={<Schedule/>} />
            <Route path="settings" element={<Settings/>} />
            <Route path="logout" element={<Logout/>} />
            {/* <Route path="tech" element={<Technician/>} /> */}
          </Route>

        </Routes>

        <Routes>
          <Route path="/supporter-dashboard" element={< AdminLayout />}>
            <Route index element={< Admindashboard />} />
            <Route path="category" element={< Admincategory />} />
            <Route path="chats" element={< Adminchats/>} />
          </Route>

        </Routes>



    </>



  );


}

export default App;
