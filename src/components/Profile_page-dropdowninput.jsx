import "./Profile_page.css"
import {useField} from "formik"

const ProfilePageDropdownFeild = ({label,values,required,...props}) => {

    const [field, meta] = useField(props)

    return (
        <div className="ProfilePageDropdownFeild">
            <label htmlFor="">{label}{required && <span> *</span>}</label>
            <select {...field} {...props}>
                {values.map(opt => {
                    return(
                        <option value={opt} key={opt}>{opt}</option>
                    )
                })}
            </select>
        </div>
    )
}
export default ProfilePageDropdownFeild