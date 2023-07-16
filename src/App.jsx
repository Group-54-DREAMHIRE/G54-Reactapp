import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/main.scss';
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/'  element={<RootLayout/>}>
            <Route path='/home' index/>
            <Route path='/dashboard' />
            <Route path='/quizes' />
            <Route path='/profile' />
            <Route path='/blog' />
            <Route path='/jobs' />
            <Route path='/logout' />
            <Route path='/contact' />
            <Route path='/about' />
            <Route path='/faq' />
            <Route path='/more' />
            <Route path='/posts' />
            <Route path='/media' />
            <Route path='/comments' />
            <Route path='/appearence' />
            <Route path='/settings' />
            <Route path='/changepassword' />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
