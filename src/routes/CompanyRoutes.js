import { Routes, Route } from "react-router-dom";

import RootLayout from '../layouts/RootLayout';
import CompanyDashboard from '../pages/company/CompanyDashboard';
import PostedEvents from '../pages/company/PostedEvents';
import EventDetails from '../pages/company/EventDetails';
import RegisteredCandidates from '../pages/company/RegisteredCandidates'
import Events from "../pages/Events";
import JobPosts from '../pages/JobPosts';
import Companies from '../pages/Companies';
import Candidates from '../pages/Candidates';
import Notifications from '../pages/Notifications';
import ChangePassword from "../pages/ChangePassword";

import PostedJobs from '../pages/company/PostedJobs';
import JobPost from '../pages/JobPost';

import Interviews from '../pages/company/Interviews';
import ScheduleInterviews from '../pages/company/ScheduleInterviews';

import ScheduledInterviews from '../pages/company/ScheduledInterviews';
import SelectedTimeSlots from "../pages/company/SelectedTimeSlots";
import PendingTimeSlots from "../pages/company/PendingTimeSlots";
import RejectedCandidates from "../pages/company/RejectedCandidates";
import AssignedCandidates from "../pages/company/AssignedCandidates";

import ScheduleTests from '../pages/company/ScheduleTest';
import CreateTest from '../pages/company/CreateTest';
import ScheduledTests from '../pages/company/ScheduledTests';
import QuestionPaper from "../Components/QuestionPaper";
import AddQuestions from "../pages/company/AddQuestions";

import SendNotifications from '../pages/company/SendNotification';
import CandidateResumes from '../pages/company/CandidatResumes';
import PendingResume from '../pages/company/resume/PendingResume';
import RejectResume from '../pages/company/resume/RejectResume';
import CanceledResume from "../pages/company/resume/CanceledResume";
import ShortListResume from '../pages/company/resume/ShortListResume';
import Registration from '../pages/company/Registration';
import Users from "../pages/company/Users";
import CompanyProfile from "../pages/company/CompanyProfile";
import AddJobPost from "../pages/company/AddJobPost";
import OneFullCard from "../pages/OneFullEvent";
import EventForm from "../Components/cards/company/EventForm";
import CompanyPage from '../pages/CompanyPage';
import CandidatePage from "../pages/CandidatePage";
import GenarateInterviews from "../pages/company/GenarateInterviews";
import EditJobPost from "../pages/company/EditJobPost"
export default function CompanyRoutes() {
  return (
    <>
        <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/dashboard" element={<CompanyDashboard/>}/>
          <Route path="/profile" element={<CompanyProfile/>}/>
          <Route path="/registration" element={<Registration/>}/>

          <Route path="/postedjobs" element={<PostedJobs/>}/>
          <Route path="/addjobpost" element={<AddJobPost/>}/>
          <Route path='/jobpost/:id' element={<JobPost/>}/>

          <Route path="/postedjobs/editjobpost" element={<EditJobPost/>} />

          <Route element={<CandidateResumes/>}>
            <Route path="/pendingresumes" index element={<PendingResume/>} />
            <Route path="/rejectresumes" element={<RejectResume/>} />
            <Route path="/shortlistresumes" element={<ShortListResume/>} />
            <Route path="/canceledresumes" element={<CanceledResume/>} />
          </Route>

          <Route path="/postedevents" element={<PostedEvents/>}/>
          <Route path="/postedevents/:id/details" element={<EventDetails/>}/>
          <Route path="/postedevents/registeredcandidates" element={<RegisteredCandidates/>} />

          <Route path="/events" element={<Events/>}/>
          <Route path="/addevent" element={<EventForm/>}/>
          <Route path="/event" element={<OneFullCard/>}/>

          <Route path="/interviews" element={<Interviews/>}/>
          <Route path="/interviews/scheduleinterviews" element={<GenarateInterviews/>} />
          <Route path="/genarateinterviews" element={<ScheduleInterviews/>}/>

          <Route path="/scheduledinterviews" element={<ScheduledInterviews/>} />
          <Route path="/scheduledinterviews/selectedtimeslots" element={<SelectedTimeSlots/>} />
          <Route path="/scheduledinterviews/pendingtimeslots" element={<PendingTimeSlots/>} />
          <Route path="/scheduledinterviews/rejectedcandidates" element={<RejectedCandidates/>} />
          <Route path="/scheduledinterviews/assignedcandidates" element={<AssignedCandidates/>} />


          <Route path="/scheduletests" element={<ScheduleTests/>}/>
          <Route path="/scheduledtests" element={<ScheduledTests/>}/>
          <Route path="/scheduledtests/questionpaper" element={<QuestionPaper/>}/>
          <Route path="/scheduletests/createtest" element={<CreateTest />}/>
          <Route path="/scheduletests/addquestions" element={<AddQuestions/>} />

          <Route path="/sendnotifications" element={<SendNotifications/>}/>
          <Route path="/jobposts" element={<JobPosts/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/company" element={<CompanyPage/>}/>
          <Route path="/company/:id" element={<CompanyPage/>}/>
          <Route path="/candidates" element={<Candidates/>}/>
          <Route path="/candidate/:id" element={<CandidatePage/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/changepassword" element={<ChangePassword/>}/>
        </Route>
      </Routes>
    </>
  )
}
