import React from "react";
import "./Profile_page.css"

const ProfilePageInputfeild = (props) =>{
    return (
        <div className="ProfilePageInputfield">
            <label htmlFor="">{props.label}{props.required && <span> *</span>}</label>
            <input type={props.type} placeholder={"Enter "+String(props.label)} />
        </div>
    )   
}
export default ProfilePageInputfeild