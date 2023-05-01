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


function App() {

  return (
    <>
      <div className="appContainer" style={{ height: "100%", color: "white" }}>
        <Router>
          <ToggleButton />
          <Routes>
            <Route path='/' element={<GloveLogin />}></Route>
            <Route path='/log' element={<LogPage />}></Route>
            <Route path='/home' element={<LandingPage />}></Route>
            <Route path='/settings' element={<SettingsPage />}></Route>
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
