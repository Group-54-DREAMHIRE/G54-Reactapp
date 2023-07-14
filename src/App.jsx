import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/main.scss';
import RootLayout from "./layouts/RootLayout";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element/>
          <Route path='/' element={<RootLayout/>}>
            <Route path='/' index />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
