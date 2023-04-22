import './App.css';
import LandingPage from './components/LandingPage';
import LogPage from './components/LogPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [logButton, setLogButton] = useState("Home");

  function handleLogClick() {
    if (logButton === "Home") {
      setLogButton("Log");
    }
    else {
      setLogButton("Home");
    }
  }



  return (
    <>
      <div className="appContainer" style={{ height: "100%", color: "white" }}>
        <Router>
          <div style={{ position: "fixed", bottom: "2%", right: "4%" }}>
            <Link to={`${logButton === "Home" ? "/log" : "/"}`} className="logButton" onClick={handleLogClick}>{`${logButton === "Home" ? "View Log" : "Home"}`}</Link>
          </div>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/log' element={<LogPage />}></Route>
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
