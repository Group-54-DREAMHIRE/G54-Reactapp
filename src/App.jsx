import { BrowserRouter } from "react-router-dom";
import "./assets/styles/main.scss";
import Routes from './routes/MainRoutes';
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
