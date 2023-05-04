import Lottie from "lottie-react";
import gloves from "../lotties/gloves.json";
import { useState, useEffect } from "react";
import "./LandingPage.css";
// import notification from '../assets/audio/notification.mp3';
import { db } from "../utils/firebase.js";
import { onValue, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";


export default function LandingPage({ setLogText, logText, playNotificationSound, logList, setLogList, gloveState }) {

    const navigate = useNavigate();
    const [var0, setVar0] = useState();
    const [var1, setVar1] = useState();
    const [var2, setVar2] = useState();
    const [var3, setVar3] = useState();
    const [var4, setVar4] = useState();
    const [var5, setVar5] = useState();
    const [var6, setVar6] = useState();
    // const [logText, setLogText] = useState(var0);
    const [prevMsg, setPrevMsg] = useState(logText);






    useEffect(() => {
        const query = ref(db, "glove/1");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setVar0(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/4");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setVar1(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/5");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setVar2(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/0");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setVar3(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/0");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setVar4(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/2");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setVar5(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/6");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setVar6(datavar);
            }
        });
    });


    // glove codes
    const gloveCode = {
        0: var0,
        1: var1,
        2: var2,
        3: var3,
        4: var4,
        5: var5,
        6: var6
    }


    useEffect(() => {
        if (gloveState) {
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
        }
        else {
            setLogText("Glove is Off")
        }
    });


    useEffect(() => {
        if (logText && logText !== prevMsg) {
            playNotificationSound();
            setPrevMsg(logText);
            setLogList(prevList => [...prevList, { text: logText, timestamp: new Date().toLocaleString() }]);
        }
    }, [logText, prevMsg, playNotificationSound, setLogList]);


    return (
        <>
            <div className="landingPage">
                <div
                    className="heading"
                    style={{ height: "50%", display: "grid", placeItems: "center", marginTop: "4rem" }}
                >
                    <div
                        className="lottieLogo"
                        style={{ width: "120px", paddingTop: "2%" }}
                    >
                        <Lottie animationData={gloves}></Lottie>
                    </div>
                    <div>
                        <h2 style={{ fontSize: "3rem" }}>Patient Gloves</h2>
                    </div>
                    <div className="settingsbtn">
                        <img src={require("../assets/images/setting.png")} alt="" style={{ height: "6%", position: "absolute", top: "2%", right: "5%" }} onClick={() => { navigate("/settings") }} />
                    </div>
                </div>
                <div
                    className="glovesLog"
                    style={{
                        height: "25vh",
                        display: "grid",
                        background: "#101c43",
                        placeItems: "center",
                        borderRadius: "30px",
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginBottom: "5%",
                    }}
                >
                    <h1 style={{ fontSize: "2.2rem", textAlign: "center" }}>{prevMsg}</h1>
                </div>
                <div
                    className="buttons"
                    style={{
                        display: "grid", placeItems: "center"
                        , marginBottom: "0px"
                    }}
                >
                </div>


            </div>
        </>
    );
}
