import React from "react";
import "./Profile_page.css"
import { useField } from "formik"

const ProfilePageInputfeild = React.memo(({ label, required, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="ProfilePageInputfield">
            <label htmlFor={label}>{label}{required && <span> *</span>}</label>
            <input {...field} {...props} placeholder={"Enter " + label} id={label}/>
            {meta.touched && meta.error ? (
                <div className="ProfilePageInputfield_error_msg">{meta.error}</div>
            ) : null}
            
        </div>
    );
});
export default ProfilePageInputfeild;

// import React from 'react';
// import { useField } from 'formik';

// const ProfilePageInputfield = React.memo(({ label, required, ...props }) => {
//     const [field, meta] = useField(props);

//     return (
//         <div className="ProfilePageInputfield">
//             <label htmlFor={label}>{label}{required && <span> *</span>}</label>
//             <input {...field} {...props} placeholder={"Enter " + label} id={label}/>
//             {meta.touched && meta.error ? (
//                 <div className="ProfilePageInputfield_error_msg">{meta.error}</div>
//             ) : null}
//         </div>
//     );
// });

// export default ProfilePageInputfield;
