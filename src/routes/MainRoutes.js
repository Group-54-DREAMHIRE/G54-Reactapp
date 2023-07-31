import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import Profile from "../pages/Profile";
import DefaultMainLayout from "../layouts/DefaultMainLayout";
import AddJobPost  from "../pages/company/AddJobPost";
import ChangePassword from "../pages/ChangePassword";
import CandidatResumes from "../pages/company/CandidatResumes";
import PendingResume from '../pages/company/resume/PendingResume';
import RejectResume from "../pages/company/resume/RejectResume";
import ShortListResume from "../pages/company/resume/ShortListResume";
import Resume from "../pages/candidate/Resume";
import SignIn from "../pages/SignIn";
import Login from "../pages/Login";


export default function MainRoutes() {


   
      return(
        <>
        <Routes>
        <Route path="/" index  element={<DefaultMainLayout />}/>
        <Route path="/login" element={<Login/>} />
        { <Route element={<RootLayout/>}  >
           <Route path="/addjobpost" index element={<AddJobPost/>} />
           <Route path="/dashboard" />
           <Route path="/profile" element={ <Profile/>}/>
           <Route element={<CandidatResumes/>}>
             <Route path="/pending" element={<PendingResume/>} />
             <Route path="/reject" element={<RejectResume/>}/>
             <Route path="/shortlist" element={<ShortListResume/>}/>
           </Route>
           
           <Route path="/resume" element={<Resume/>} />
           <Route path="/changepassword" element={<ChangePassword/>}/>
         </Route>}
        </Routes>  
        <Routes >
         </Routes> 
     </>
      )  
}
