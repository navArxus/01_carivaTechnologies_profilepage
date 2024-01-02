import "./Profile_page.css"
import React from 'react';
import { useField } from 'formik';

const ProfilePageDropdownFeild = React.memo(({ label, values, required, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="ProfilePageDropdownFeild">
            <label htmlFor="">{label}{required && <span> *</span>}</label>
            <select {...field} {...props}>
                {values.map(opt => (
                    <option value={opt} key={opt}>{opt}</option>
                ))}
            </select>
            {meta.touched && meta.error ? (
                <div className="ProfilePageInputfield_error_msg">{meta.error}</div>
            ) : null}
        </div>
    );
});

export default ProfilePageDropdownFeild;
