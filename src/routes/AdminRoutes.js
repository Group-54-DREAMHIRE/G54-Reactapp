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
import RegistrationRequest from '../pages/admin/RegistrationRequest';
import Payments from '../pages/admin/Payments';
import HandleCompany from '../pages/admin/HandleCompany';
import HandleCandidate from '../pages/admin/HandleCanidate';
import EditLandingPage from '../pages/admin/EditLandingPage';

export default function AdminRoutes() {
  return (
    <>
        <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/dashboard" index element={<AdminDashboard/>}/>
          <Route path="/profile" element={<AdminProfile/>}/>
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/registration" element={<RegistrationRequest/>}/>
          <Route path="/handlecompanies" element={<HandleCompany/>}/>
          <Route path="/handlecandidates" element={<HandleCandidate/>}/>
          <Route path="/editlanding" element={<EditLandingPage/>}/>
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
