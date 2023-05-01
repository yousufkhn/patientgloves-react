import React from "react";
import "./SettingsPage.css"

export default function SettingsPage(){
    return(
        <>
            <div className="finger-gesture-wrapper">
                <div className="icon">
                    <img src={require("../assets/images/f_index.png")} alt="" srcset="" />
                </div>
                <div className="input">
                <label for="inp" class="inp">
                    <input type="text" id="inp" placeholder="&nbsp;"/>
                    <span class="label">Label</span>
                    <span class="focus-bg"></span>
                </label>
                </div>
            </div>
            
        </>
    )
}