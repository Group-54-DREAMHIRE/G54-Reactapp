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

export default function MainRoutes() {
   
      return(
        <BrowserRouter>
        <Routes>
        <Route path="/" index  element={<DefaultMainLayout />}/>
        { <Route element={<RootLayout/>}  >
           <Route path="/addjobpost" index element={<AddJobPost/>} />
           <Route path="/dashboard" />
           <Route path="/profile" element={ <Profile/>}/>
           <Route element={<CandidatResumes/>}>
             <Route path="/pending" element={<PendingResume/>} />
             <Route path="/reject" element={<RejectResume/>}/>
             <Route path="/shortlist" element={<ShortListResume/>}/>

           </Route>
           <Route path="/jobs" />
           <Route path="/contact" />
           <Route path="/about" />
          
           <Route path="/more" />
           <Route path="/posts" />
           <Route path="/media" />
           <Route path="/comments" />
           <Route path="/appearence" />
           <Route path="/settings" />
           <Route path="/changepassword" element={<ChangePassword/>}/>
         </Route>}
        </Routes>  
        <Routes >
         </Routes> 
     </BrowserRouter>
      )  
}
