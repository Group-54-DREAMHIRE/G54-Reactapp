import { Routes, Route } from "react-router-dom";

import RootLayout from '../layouts/RootLayout';
import CandidateDashboard from '../pages/candidate/CandidateDashboard';
import CandidateProfile from '../pages/candidate/CandidateProfile';
import Resume from "../pages/candidate/Resume";
import AppliedJobs from '../pages/candidate/AppliedJobs';
import SavedJobs from '../pages/candidate/SavedJobs';
import SavedEvents from '../pages/candidate/SavedEvents';
import AppliedEvents from '../pages/candidate/AppliedEvents';
import Events from "../pages/Events";
import JobPosts from '../pages/JobPosts';
import Companies from '../pages/Companies';
import Candidates from '../pages/Candidates';
import Notifications from '../pages/Notifications';
import ChangePassword from "../pages/ChangePassword";
import Interviews from '../pages/candidate/Interviews';
import SelectionTest from '../pages/candidate/SelectionTest';
import JobPost from "../pages/JobPost";
import AppliedJob from '../pages/candidate/AppliedJob';
import InterviewDetails from "../pages/candidate/InterviewDetails";
import CompanyPage from '../pages/CompanyPage';
import OneFullCard from "../pages/OneFullEvent";
import EventForm from "../Components/cards/company/EventForm";
import CandidatePage from "../pages/CandidatePage";
import Sheduled from '../pages/candidate/interviews/Sheduled';
import ViewResume from "../Components/candidate/ViewResume";
import Pending from "../pages/candidate/interviews/Pending";
export default function CandidateRoutes() {
  return (
    <>
        <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/dashboard" index element={<CandidateDashboard/>}/>
          <Route path="/profile" element={<CandidateProfile/>}/>
          <Route path="/resume" element={<ViewResume/>}/>
          <Route path="/appliedjobs" element={<AppliedJobs/>}/>
          <Route path="/appliedjob" element={<AppliedJob/>}/>
          
          <Route element={<Interviews/>}>
            <Route path="/pendinginterviews" element={<Pending/>}/>
            <Route path="/scheduledinterviews" element={<Sheduled/>}/>
          </Route>

          <Route path="/interviewdetails" element={<InterviewDetails/>}/>
          <Route path="/selectiontest" element={<SelectionTest/>}/>
          <Route path="/savedjobs" element={<SavedJobs/>}/>
          <Route path="/appliedevents" element={<AppliedEvents/>}/>
          <Route path="/savedevents" element={<SavedEvents/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/event" element={<OneFullCard/>}/>
          <Route path="/announcements" element={<Notifications/>}/>
          <Route path="/registerevent" element={<></>}/>
          <Route path="/jobposts" element={<JobPosts/>}/>
          <Route path="/jobpost/:id" element={<JobPost/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/company/:id" element={<CompanyPage/>}/>
          <Route path="/candidates" element={<Candidates/>}/>
          <Route path="/candidate/:id" element={<CandidatePage/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/changepassword" element={<ChangePassword/>}/>
        </Route>
      </Routes>
    </>
  )
}
