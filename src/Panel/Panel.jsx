import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../component/Login/Login";
import Signup from "../component/Signup/Signup";
import Dashboard from "../component/Dashboard/Dashboard";
import VendorLogin from "../component/vendorLogin/VendorLogin";
import VendorSignup from "../component/vendorSignup/VendorSignup";
import Homepage from "../component/Homepage/Homepage";

const Panel = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/vendor-login" element={<VendorLogin/>}/>
      <Route path="/vendor-signup" element={<VendorSignup/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
    </Routes>
  );
};

export default Panel;
