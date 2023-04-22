import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ToggleButton() {

    const [logButton, setLogButton] = useState("Home");
    const location = useLocation();

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
            {location.pathname !== '/' && (<div style={{ position: "fixed", bottom: "2%", right: "4%" }}>
                <Link to={`${logButton === "Home" ? "/log" : "/home"}`} className="logButton" onClick={handleLogClick}>{`${logButton === "Home" ? "View Log" : "Home"}`}</Link>
            </div>)}

        </>
    )
}