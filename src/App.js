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

  const [logText, setLogText] = useState();


  function playNotificationSound() {
    const audio = new Audio(notification);
    audio.play();
    navigator.vibrate(300);
    console.log("Notification sound played.");
  }


  return (
    <>
      <div className="appContainer" style={{ height: "100%", color: "white", overflow: "hidden" }}>
        <Router>
          <ToggleButton />
          <Routes>
            <Route path='/' element={<GloveLogin />}></Route>
            <Route path='/log' element={<LogPage />}></Route>
            <Route path='/home' element={<LandingPage setLogText={setLogText} logText={logText} playNotificationSound={playNotificationSound} />} ></Route>
            <Route path='/settings' element={<SettingsPage />}></Route>
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
