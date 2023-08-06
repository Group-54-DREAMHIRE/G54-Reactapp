import { Routes, Route } from "react-router-dom";

import RootLayout from '../layouts/RootLayout';
import CompanyDashboard from '../pages/company/CompanyDashboard';
import PostedEvents from '../pages/company/PostedEvents';
import Events from "../pages/Events";
import JobPosts from '../pages/JobPosts';
import Companies from '../pages/Companies';
import Candidates from '../pages/Candidates';
import Notifications from '../pages/Notifications';
import ChangePassword from "../pages/ChangePassword";
import PostedJobs from '../pages/company/PostedJobs';
import Interviews from '../pages/company/Interviews';
import SheduleTests from '../pages/company/SheduleTest';
import SendNotifications from '../pages/company/SendNotification';
import CandidateResumes from '../pages/company/CandidatResumes';
import PendingResume from '../pages/company/resume/PendingResume';
import RejectResume from '../pages/company/resume/RejectResume';
import ShortListResume from '../pages/company/resume/ShortListResume';
import Registration from '../pages/company/Registration';
import Users from "../pages/company/Users";
import CompanyProfile from "../pages/company/CompanyProfile";
import AddJobPost from "../pages/company/AddJobPost";
import JobPost from '../pages/JobPost';
export default function CandidateRoutes() {
  return (
    <>
        <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/dashboard" index element={<CompanyDashboard/>}/>
          <Route path="/profile" element={<CompanyProfile/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/postedjobs" element={<PostedJobs/>}/>
          <Route path="/addjobpost" element={<AddJobPost/>}/>
          <Route path="/jobpost" element={<JobPost/>}/>

          <Route element={<CandidateResumes/>}>
            <Route path="/pendingresumes" index element={<PendingResume/>} />
            <Route path="/rejectresumes" element={<RejectResume/>} />
            <Route path="/shortlistresumes" element={<ShortListResume/>} />
          </Route>

          <Route path="/postedevents" element={<PostedEvents/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/interviews" element={<Interviews/>}/>
          <Route path="/sheduletests" element={<SheduleTests/>}/>
          <Route path="/sendnotifications" element={<SendNotifications/>}/>
          <Route path="/jobposts" element={<JobPosts/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/candidates" element={<Candidates/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/changepassword" element={<ChangePassword/>}/>
        </Route>
      </Routes>
    </>
  )
}
