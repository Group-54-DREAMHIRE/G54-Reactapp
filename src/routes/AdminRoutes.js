import { Routes, Route } from "react-router-dom";

import RootLayout from '../layouts/RootLayout';
import AdminProfile from '../pages/admin/AdminProfile';
import AdminDashboard from '../pages/admin/AdminDashboard';
import Events from "../pages/Events";
import JobPosts from '../pages/JobPosts';
import Companies from '../pages/Companies';
import Candidates from '../pages/Candidates';
import Notifications from '../pages/Notifications';
import ChangePassword from "../pages/ChangePassword";
import SendNotifications from '../pages/company/SendNotification';
import Users from '../pages/admin/Users';

export default function AdminRoutes() {
  return (
    <>
        <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/dashboard" index element={<AdminDashboard/>}/>
          <Route path="/profile" element={<AdminProfile/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/sendnotifications" element={<SendNotifications/>}/>
          <Route path="/jobposts" element={<JobPosts/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/candidates" element={<Candidates/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/changepassword" element={<ChangePassword/>}/>
        </Route>
      </Routes>
    </>
  )
}
