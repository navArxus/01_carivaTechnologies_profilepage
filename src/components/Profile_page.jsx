import React from "react";
import "./Profile_page.css"
import Profilephoto from "../assests/Avatar-Profile-Vector-PNG-File-removebg-preview.png"
import ProfilePageInputfeild from "./Profilepageinputfeild";
import ProfilePageDropdownFeild from "./Profilepagedropdowninput";
import { IoAddCircleOutline } from "react-icons/io5";
import { Formik ,Form } from "formik"
import { InitialValues, validation } from "./FormikParams"

const ProfilePage = () => {

    return (
        <Formik
            initialValues={InitialValues}
            validationSchema={validation}
            onSubmit={values => {
                console.log(values)
            }}
        >
            <Form>
                <div className="profile-page">
                    <div className="porfile-page-profile-section">
                        <img src={Profilephoto} alt="ProfilePhoto" />
                        <div className="ProfilePagefileinput">
                            <label htmlFor="profilephoto"><IoAddCircleOutline size={"20px"} /> Profile Photo</label>
                            <input type="file" accept="image/png, image/jpeg" id="profilephoto" style={{ display: "none" }} />
                        </div>
                        <h3>Username</h3>
                        <p>username@gmail.com</p>
                    </div>
                    <div className="porfile-page-personal-section">
                        <h3>Personal Details</h3>
                        <ProfilePageInputfeild label="Full Name" required={true} name="fullName" type="text" />
                        <ProfilePageInputfeild label="DOB" required={true} name="dob" type="date" />
                        <ProfilePageDropdownFeild label="Gender" values={["Male", "Female", "Others"]} required={true} name="gender" />
                        <ProfilePageInputfeild label="Email" required={true} type="email" name="email" />
                        <ProfilePageInputfeild label="Contact Number" required={true} type="tel" name="contactNumber" />
                        <ProfilePageInputfeild label="OTP" type="text" name="OTP" />
                        <ProfilePageInputfeild label="Current Location" required={true} type="text" name="currentLocation" />
                        <ProfilePageDropdownFeild label="Preferred Location" values={["Delhi", "Kolkata", "Mumbai"]} required={true} name="prefferredLocation" />
                        <ProfilePageDropdownFeild label="Job Type" values={["Remote", "On-Site", "Hybrid"]} required={true} name="jobType" />
                        <div className="ProfilePagefileinput">
                            <label htmlFor="">Resume</label> <br />
                            <input type="file" accept="application/pdf" />
                        </div>
                        <h3>Education</h3>
                        <ProfilePageInputfeild label="University/College Name" required={true} type="text" name="university" />
                        <ProfilePageDropdownFeild label="Qualification" values={["BCA", "B-tech", "BE"]} required={true} name="qualification" />
                        <ProfilePageInputfeild label="Specialization" type="text" name="speclization" />
                        <ProfilePageDropdownFeild label="Year Of Passing" values={["2022", "2023", "2024", "2025"]} required={true} name="grudationYear" />

                    </div>
                    <div className="porfile-page-experience-section">
                        <h3>Professional Experience</h3>
                        <ProfilePageInputfeild label="Current Designation" type="text" name="currentDesgination" />
                        <ProfilePageInputfeild label="Current Organisation Name" type="text" name="currentOrganisation" />
                        <ProfilePageInputfeild label="Total Experience in Year" type="number" name="totalExperieneYear" />
                        <ProfilePageInputfeild label="Total Experience in Month" type="number" name="totalExperieneMonth" />
                        <ProfilePageDropdownFeild label="Notice Period in Month" values={[0, 1, 2, 3]} name="noticePeriodMonth" />
                        <ProfilePageDropdownFeild label="Skills" values={["Front-end developer", "Back-end developer", "Full-stack developer"]} required={true} name="skills" />
                        <ProfilePageInputfeild label="No of Projects Completed" type="number" name="projectCompleted" />
                        <ProfilePageInputfeild label="Current Payout in Month" type="number" name="currentPayoutMonth" />
                        <ProfilePageInputfeild label="Expected Payout in Month" required={true} type="number" name="expectedPayoutMonth" />
                        <h3>Social links</h3>
                        <ProfilePageInputfeild label="Linkedin" type="url" required={true} name="linkedin" />
                        <ProfilePageInputfeild label="GitHub" type="url" name="github" />
                        <button type="submit" >Save profile</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default ProfilePage