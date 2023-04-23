import "./GloveLogin.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";






export default function GloveLogin() {

    const navigate = useNavigate();
    const [gloveId, setGloveId] = useState("");
    const [glovePin, setGlovePin] = useState("");




    function handleLogin() {
        console.log(gloveId);
        console.log(process.env.REACT_APP_GLOVE_ID);
        console.log(glovePin);
        console.log(process.env.REACT_APP_GLOVE_PIN);
        if (gloveId === process.env.REACT_APP_GLOVE_ID && glovePin === process.env.REACT_APP_GLOVE_PIN) {
            navigate("/home");
        }
        else {
            alert("Invalid Credentials!")
        }

    }

    return (
        <>
            <div class="login">
                <input type="text" placeholder="Enter Glove Id" value={gloveId} onChange={(e) => setGloveId(e.target.value)} />
                <input type="password" placeholder="Enter Glove Pin" value={glovePin} onChange={(e) => setGlovePin(e.target.value)} />
                <button onClick={handleLogin} disabled={!gloveId}>Connect</button>

            </div>

        </>
    )
}