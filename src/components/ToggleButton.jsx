import { useLocation } from "react-router-dom";
import "../components/ToggleButton.css";
import { useNavigate } from "react-router-dom";

export default function ToggleButton() {

    const location = useLocation();

    const navigate = useNavigate();
    return (
        <>
            {location.pathname !== '/' && (
                <div className="bottomNavbar" style={{ position: "fixed", bottom: "0%", width: "100%", height: "20%", display: `${location.pathname === "/settings" ? "none" : "flex"}` }}>
                    {/* <Link to={`${logButton === "Home" ? "/log" : "/home"}`} className="logButton" style={{ backgroundColor: "#4ad0ee" }} onClick={handleLogClick}>{`${location.pathname === "/home" ? "View Log" : "Home"}`}</Link> */}
                    <div className="1" style={{ width: "37%", height: "100%", textAlign: "center" }}>
                        <img src={require(`../assets/images/home${location.pathname === "/home" ? "Focus" : ""}.png`)} alt="" style={{ height: "30%", margin: "auto", position: "absolute", bottom: "22%", left: "12%" }} onClick={() => { navigate("/home") }} />
                    </div>
                    <div className="2" style={{ width: "27%", transform: "scale(0.8)", textAlign: 'center' }}>
                        <input type="checkbox" id="toggle" />
                        <label for="toggle" class="toggleWrapper" style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <div class="toggle"></div>
                        </label>
                    </div>
                    <div className="3" style={{ width: "36%", height: "100%", textAlign: "center" }}>
                        <img src={require(`../assets/images/notes${location.pathname === "/log" ? "Focus" : ""}.png`)} alt="" style={{ height: "30%", margin: "auto", position: "absolute", bottom: "22%", right: "12%" }} onClick={() => { navigate("/log") }} />
                    </div>

                </div >
            )
            }

        </>
    )
}