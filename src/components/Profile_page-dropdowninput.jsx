import "./Profile_page.css"

const ProfilePageDropdownFeild = (props) => {
    return (
        <div className="ProfilePageDropdownFeild">
            <label htmlFor="">{props.label}{props.required && <span> *</span>}</label>
            <select name="" id="">
                {props.values.map(opt => {
                    return(
                        <option value={opt} key={opt}>{opt}</option>
                    )
                })}
            </select>
        </div>
    )
}
export default ProfilePageDropdownFeild