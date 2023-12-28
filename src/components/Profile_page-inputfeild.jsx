import React from "react";
import "./Profile_page.css"
import { useField } from "formik"

const ProfilePageInputfeild = ({ label, required, ...props }) => {
    const [field, meta] = useField(props)
    console.log(meta)
    return (
        <div className="ProfilePageInputfield">
            <label htmlFor="">{label}{required && <span> *</span>}</label>
            <input {...field} {...props} placeholder={"Enter " + label} />
            {meta.touched && meta.error ? (
                <div className="ProfilePageInputfield_error_msg">{meta.error}</div>
            ) : null}
            
        </div>
    )
}
export default ProfilePageInputfeild