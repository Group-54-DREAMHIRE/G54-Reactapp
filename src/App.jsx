import { BrowserRouter } from "react-router-dom";
import "./assets/styles/main.scss";
import Routes from "./routes/MainRoutes";
import CompanyAdvertisementList from './pages/CompanyAdvertisementList';
import CompanyList from './pages/CompanyList';
import CandidateList from './pages/CandidateList';
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/* <CompanyAdvertisementList/>
      <CompanyList/>
      <CandidateList/> */}
    </>
  );
}

export default App;
