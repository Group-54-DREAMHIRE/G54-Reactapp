import { BrowserRouter } from "react-router-dom";
import "./assets/styles/main.scss";
import Routes from "./routes";
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
