import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/main.scss';
import RootLayout from "./layouts/RootLayout";
import Home from './pages/Home';
import ChangePassword from "./pages/ChangePassword";
import Profile from './pages/Profile'
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isloggedin,SetIsloggedin] = useState(false);
  const handleLogin = () =>{
    SetIsloggedin(!isloggedin);
  }
  return (
    <>
      {!isloggedin &&<Login handleLogin={handleLogin}/>}
        {isloggedin &&
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<RootLayout/>}>
                <Route path='/' index element={<Home/>}/>
                <Route path='/dashboard'/>
                <Route path='/quizes'/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/changepassword' element={<ChangePassword/>}/>
                <Route path='/logout'/>

              </Route>
          </Routes>
        </BrowserRouter>
        }
    </>
  );
}

export default App;
