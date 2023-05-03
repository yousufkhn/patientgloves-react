import './App.css';
import LandingPage from './components/LandingPage';
import LogPage from './components/LogPage';
import GloveLogin from './components/GloveLogin';
import ToggleButton from './components/ToggleButton';
import SettingsPage from './components/SettingsPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';
import notification from './assets/audio/notification.mp3';



function App() {

  const [gloveState, setGloveState] = useState(false);

  const [logText, setLogText] = useState();
  const [logList, setLogList] = useState([]);


  function playNotificationSound() {
    const audio = new Audio(notification);
    audio.play();
    navigator.vibrate(300);
    console.log("Notification sound played.");
    console.log(logList)
  }


  return (
    <>
      <div className="appContainer" style={{ height: "100%", color: "white", overflow: "hidden" }}>
        <Router>
          <ToggleButton setGloveState={setGloveState} gloveState={gloveState} />
          <Routes>
            <Route path='/' element={<GloveLogin />}></Route>
            <Route path='/log' element={<LogPage logList={logList} />}></Route>
            <Route path='/home' element={<LandingPage setLogText={setLogText} logText={logText} playNotificationSound={playNotificationSound} logList={logList} setLogList={setLogList} gloveState={gloveState} />} ></Route>
            <Route path='/settings' element={<SettingsPage />}></Route>
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
