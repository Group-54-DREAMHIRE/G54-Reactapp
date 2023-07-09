import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/main.scss';
import RootLayout from "./layouts/RootLayout";
import Home from './pages/Home';
import ChangePassword from "./pages/ChangePassword";
import Profile from './pages/Profile'
import Login from "./pages/Login";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard";
import Quizes from "./pages/Quizes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<RootLayout />}>
            <Route path='/' index element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/quizes' element={<Quizes />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/changepassword' element={<AnimatePresence><ChangePassword /></AnimatePresence>} />
            <Route path='/blogs' />
            <Route path='/jobs' />
            <Route path='/logout' />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
