import "./GloveLogin.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";




export default function GloveLogin() {

    const navigate = useNavigate();
    const [gloveId, setGloveId] = useState("");
    const correctGloveId = process.env.REACT_APP_GLOVE_ID;



    function handleLogin() {
        if (gloveId === correctGloveId) {
            navigate("/home");
        }
        else {
            alert("GloveId does not exist!")
            console.log(correctGloveId)

            console.log(gloveId)
        }

    }

    return (
        <>
            <div class="login">
                <input type="text" placeholder="Enter Glove Id" value={gloveId} onChange={(e) => setGloveId(e.target.value)} />
                <button onClick={handleLogin} disabled={!gloveId}>Connect</button>

            </div>

        </>
    )
}