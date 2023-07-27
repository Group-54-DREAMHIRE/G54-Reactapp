import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/main.scss";
import RootLayout from "./layouts/RootLayout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import DefaultMainLayout from "./layouts/DefaultMainLayout";
import AddJobPost  from "./pages/company/AddJobPost";
import SavedJobs from "./pages/SavedJobs";
import CompanyAvertisementList from "./pages/CompanyAdvertisementList";



function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path="/" index  element={<DefaultMainLayout />}/>
         <Route path="/" element={<RootLayout/>}>
            <Route path="/home" index element={<Profile/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quizes" />
            <Route path="/profile" element={ <Profile/>}/>
            <Route path="/blog" />
            <Route path="/jobs" />
            <Route path="/logout" />
            <Route path="/contact" />
            <Route path="/about" />
            <Route path="/addjobpost" element={<AddJobPost/>} />
            <Route path="/more" />
            <Route path="/posts" />
            <Route path="/media" />
            <Route path="/comments" />
            <Route path="/appearence" />
            <Route path="/settings" />
            <Route path="/changepassword" />
            <Route path="/savedjobs" element={<SavedJobs/>} />
            <Route path="/companyAdvertisementList" element={<CompanyAvertisementList/>} />

          </Route>
         </Routes>
        
        
      </BrowserRouter>
    </>
  );
}

export default App;
