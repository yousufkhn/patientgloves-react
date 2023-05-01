import React from "react";
import "./SettingsPage.css"

export default function SettingsPage(){
    return(
        <>
        <h1 className="heading">
            Settings
        </h1>
        <div className="finger-gesture-wrapper">
            <div className="icon">
                <img src={require("../assets/images/f_index.png")} alt="" srcset="" />
            </div>
            <div className="input">
                <input type="text" class="form__input" id="name" placeholder="Enter Message" required="" />
            </div>
        </div>

        <div className="finger-gesture-wrapper">
            <div className="icon">
                <img src={require("../assets/images/f_index.png")} alt="" srcset="" />
            </div>
            <div className="input">
                <input type="text" class="form__input" id="name" placeholder="Enter Message" required="" />
            </div>
        </div>

        <div className="finger-gesture-wrapper">
            <div className="icon">
                <img src={require("../assets/images/f_index.png")} alt="" srcset="" />
            </div>
            <div className="input">
                <input type="text" class="form__input" id="name" placeholder="Enter Message" required="" />
            </div>
        </div>

        <div className="finger-gesture-wrapper">
            <div className="icon">
                <img src={require("../assets/images/f_index.png")} alt="" srcset="" />
            </div>
            <div className="input">
                <input type="text" class="form__input" id="name" placeholder="Enter Message" required="" />
            </div>
        </div>
        
        <div className="finger-gesture-wrapper">
            <div className="icon">
                <img src={require("../assets/images/f_index.png")} alt="" srcset="" />
            </div>
            <div className="input">
                <input type="text" class="form__input" id="name" placeholder="Enter Message" required="" />
            </div>
        </div>

        <div className="finger-gesture-wrapper">
            <div className="icon">
                <img src={require("../assets/images/f_index.png")} alt="" srcset="" />
            </div>
            <div className="input">
                <input type="text" class="form__input" id="name" placeholder="Enter Message" required="" />
            </div>
        </div>
            
        </>
    )
}