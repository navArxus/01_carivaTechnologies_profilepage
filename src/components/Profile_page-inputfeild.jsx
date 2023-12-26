import React from "react";
import "./Profile_page.css"

const ProfilePageInputfeild = (props) =>{
    return (
        <div className="ProfilePageInputfield">
            <label htmlFor="">{props.label}</label>
            <input type={props.type} placeholder={"Enter "+String(props.label).toLocaleLowerCase()} />
        </div>
    )
}
export default ProfilePageInputfeild