import { Routes, Route } from "react-router-dom";

import CandidateRoutes from "./CandidateRoutes";
import CompanyRoutes from "./CompanyRoutes";
import AdminRoutes from "./AdminRoutes";
import DefaultMainLayout from "../layouts/DefaultMainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { useSelector } from "react-redux";
import { getUser } from "../store/auth/userSlice";
import { useEffect, useState } from "react";

export default function MainRoutes() {

  const userType = localStorage.getItem("USERTYPE");


  if (userType === "candidate") {
    return <CandidateRoutes />;
  }

  else if (userType === "company") {
    return <CompanyRoutes />;
  }

  else if (userType === "admin") {
    return <AdminRoutes />;
  }
  else if(userType === null) {
    return (
      <Routes>
        <Route path="/" index element={<DefaultMainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    );
  }
}
