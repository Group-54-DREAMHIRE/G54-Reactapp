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
import Interview from '../pages/candidate/Interview';
import SelectionTest from '../pages/candidate/SelectionTest';
import JobPost from "../pages/JobPost";
export default function CandidateRoutes() {
  return (
    <>
        <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/dashboard" index element={<CandidateDashboard/>}/>
          <Route path="/profile" element={<CandidateProfile/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/appliedjobs" element={<AppliedJobs/>}/>
          <Route path="/interview" element={<Interview/>}/>
          <Route path="/selectiontest" element={<SelectionTest/>}/>
          <Route path="/savedjobs" element={<SavedJobs/>}/>
          <Route path="/appliedevents" element={<AppliedEvents/>}/>
          <Route path="/savedevents" element={<SavedEvents/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/jobposts" element={<JobPosts/>}/>
          <Route path="/jobpost" element={<JobPost/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/candidates" element={<Candidates/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/changepassword" element={<ChangePassword/>}/>
        </Route>
      </Routes>
    </>
  )
}
