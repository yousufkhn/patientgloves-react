import React, { useState } from "react";
import "./SettingsPage.css";
import { useNavigate } from "react-router";
import { update } from "firebase/database";
import { onValue, ref } from "firebase/database";
import { db } from "../utils/firebase.js";
import { useEffect } from "react";




export default function SettingsPage() {

    const navigate = useNavigate();

    const [indx, setIndx] = useState("");
    const [indxmdl, setIndxmdl] = useState("");
    const [indxltl, setIndxltl] = useState("");
    const [fist, setFist] = useState("");
    const [ltl, setLtl] = useState("");
    const [mdl, setMdl] = useState("");


    useEffect(() => {
        const query = ref(db, "glove/0");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setIndx(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/1");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setIndxmdl(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/2");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setIndxltl(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/3");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setFist(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/4");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setLtl(datavar);
            }
        });
    });

    useEffect(() => {
        const query = ref(db, "glove/5");
        return onValue(query, (snapshot) => {
            const datavar = snapshot.val();
            if (snapshot.exists()) {
                setMdl(datavar);
            }
        });
    });



    const handleSave = () => {

        if (indx === "" && indxmdl === "" && indxltl === "" && fist === "" && ltl === "" && mdl === "") {
            window.alert("Please dont leave the values Empty.")
        }
        else {
            const updates = {};
            if (indx !== "") updates["glove/0"] = indx;
            if (indxmdl !== "") updates["glove/1"] = indxmdl;
            if (indxltl !== "") updates["glove/2"] = indxltl;
            if (fist !== "") updates["glove/3"] = fist;
            if (ltl !== "") updates["glove/4"] = ltl;
            if (mdl !== "") updates["glove/5"] = mdl;
            update(ref(db), updates)
                .then(() => {
                    // console.log("Data updated successfully!");
                })
                .catch((error) => {
                    // console.error("Error updating data: ", error);
                });
            window.alert("Saved Successfully")
        }


    };



    return (
        <>
            <div className="headingDiv" style={{ display: "flex", justifyContent: "center", background: "#101c43" }}>
                <img src={require("../assets/images/backArrow.png")} alt="" style={{ height: "2rem ", position: "absolute", top: "3.5%", left: "5%" }} onClick={() => { navigate("/home") }} />
                <h1 className="heading">
                    Settings
                </h1>
            </div>

            <hr style={{ marginTop: "0px" }} />
            <div className="settingsMain" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "7%" }}>
                <div className="finger-gesture-wrapper">
                    <div className="icon">
                        <h1>☝</h1>
                    </div>
                    <div className="input">
                        <input type="text" class="form__input" id="name" placeholder="Enter Message" value={indx} onChange={(e) => setIndx(e.target.value)} />
                    </div>
                </div>

                <div className="finger-gesture-wrapper">
                    <div className="icon">
                        <h1>✌</h1>
                    </div>
                    <div className="input">
                        <input type="text" class="form__input" id="name" placeholder="Enter Message" value={indxmdl} onChange={(e) => setIndxmdl(e.target.value)} />
                    </div>
                </div>

                <div className="finger-gesture-wrapper">
                    <div className="icon">
                        <h1>🤘</h1>
                    </div>
                    <div className="input">
                        <input type="text" class="form__input" id="name" placeholder="Enter Message" value={indxltl} onChange={(e) => setIndxltl(e.target.value)} />
                    </div>
                </div>

                <div className="finger-gesture-wrapper">
                    <div className="icon">
                        <h1>✊</h1>
                    </div>
                    <div className="input">
                        <input type="text" class="form__input" id="name" placeholder="Enter Message" value={fist} onChange={(e) => setFist(e.target.value)} />
                    </div>
                </div>

                <div className="finger-gesture-wrapper">
                    <div className="icon">
                        <img src={require("../assets/images/pinky.png")} alt="" srcset="" />
                    </div>
                    <div className="input">
                        <input type="text" class="form__input" id="name" placeholder="Enter Message" value={ltl} onChange={(e) => setLtl(e.target.value)} />
                    </div>
                </div>
                <div className="finger-gesture-wrapper">
                    <div className="icon">
                        <h1>🖕</h1>
                    </div>
                    <div className="input">
                        <input type="text" class="form__input" id="name" placeholder="Enter Message" value={mdl} onChange={(e) => setMdl(e.target.value)} />
                    </div>
                </div>
                <div className="submitBtn">
                    <button className="button-36" onClick={handleSave}>Save</button>
                </div>
            </div>

        </>
    )
}