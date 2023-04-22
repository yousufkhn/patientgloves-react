import Lottie from "lottie-react";
import gloves from "../lotties/gloves.json";
import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";

import "./LandingPage.css"
import notification from '../assets/audio/notification.mp3'

export default function LandingPage() {
    const [glovesState, setGlovesState] = useState("Off");
    const [logText, setLogText] = useState("here log");
    

    // glove codes
    const gloveCode = {
        0: "OFF STATE",
        1: "Wash Room",
        2: "Feeling Lonely",
        3: "Call Doctor"
    }

    useEffect(() => {
        const query = ref(db, "glove");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                
                Object.values(data).map((value) => {
                    setLogText(gloveCode[value]);
                    return null;
                });
            }
        });
    });


    function toggleGloves() {
        if (glovesState === "Off") {
            setGlovesState("On");
            // setLogText("haha");
        } else {
            setGlovesState("Off");
            // setLogText("hihi");

        }
    }

    useEffect(() => {
        const audio = new Audio(notification);
        if (logText !== "here log") {
            audio.play();
        }
        navigator.vibrate(300);

        if ("Notification" in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification("Notification title", {
                        body: "Notification body text",
                    });
                }
            });
        }
    }, [logText]);


    return (
        <>
            <div className="landingPage">
                <div
                    className="heading"
                    style={{ height: "50%", display: "grid", placeItems: "center" }}
                >
                    <div
                        className="lottieLogo"
                        style={{ width: "120px", paddingTop: "2%" }}
                    >
                        <Lottie animationData={gloves}></Lottie>
                    </div>
                    <div>
                        <h2 style={{ fontSize: "2rem" }}>Patient Gloves</h2>
                    </div>
                </div>
                <div
                    className="glovesLog"
                    style={{
                        height: "35vh",
                        display: "grid",
                        background: "#363867",
                        placeItems: "center",
                        borderRadius: "30px",
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginBottom: "5%",
                    }}
                >
                    <h1 style={{ marginTop: "2%", }}>Patient Log</h1>
                    <h1 style={{fontSize: "3.4rem"}}>{logText}</h1>
                </div>
                <div
                    className="buttons"
                    style={{
                        display: "grid", placeItems: "center"
                        , marginBottom: "0px"
                    }}
                >
                    <h3 style={{ margin: "0px" }}>Gloves {glovesState}</h3>
                    <div className="toggleSwitch" >
                        <input type="checkbox" id="switch" />
                        <label for="switch" onClick={toggleGloves}></label>
                    </div>
                </div>

            </div>
        </>
    );
}
