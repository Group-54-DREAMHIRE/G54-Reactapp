import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/main.scss';
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DefaultMainLayout from './layouts/DefaultMainLayout';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<DefaultMainLayout/>}/>
          <Route path='/'  element={<RootLayout/>}>
            <Route path='/' index element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
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
