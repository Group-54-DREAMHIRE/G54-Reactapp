import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/main.scss";
import RootLayout from "./layouts/RootLayout";
import Profile from "./pages/Profile";
import DefaultMainLayout from "./layouts/DefaultMainLayout";
import AddJobPost  from "./pages/company/AddJobPost";
import ChangePassword from "./pages/ChangePassword";
import { useSelector } from "react-redux";
import CandidatResumes from "./pages/company/CandidatResumes";



function App() {
  const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path="/" index  element={<DefaultMainLayout />}/>
         { <Route path="/" element={<RootLayout/>}>
            <Route path="/home" index element={<Profile/>}/>
            <Route path="/dashboard" />
            <Route path="/profile" element={ <Profile/>}/>
            <Route path="/candidateresumes" element={<CandidatResumes/>}/>
            <Route path="/jobs" />
            <Route path="/contact" />
            <Route path="/about" />
            <Route path="/addjobpost" element={<AddJobPost/>} />
            <Route path="/more" />
            <Route path="/posts" />
            <Route path="/media" />
            <Route path="/comments" />
            <Route path="/appearence" />
            <Route path="/settings" />
            <Route path="/changepassword" element={<ChangePassword/>}/>
          </Route>}
         </Routes>   
      </BrowserRouter>
    </>
  );
}

export default App;
