import React from "react";
import "./Profile_page.css"
import Profilephoto from "../assests/Avatar-Profile-Vector-PNG-File-removebg-preview.png"
import ProfilePageInputfeild from "./Profile_page-inputfeild";
import ProfilePageDropdownFeild from "./Profile_page-dropdowninput";
import { IoAddCircleOutline } from "react-icons/io5";


const ProfilePage = () => {
    return (
        <form action="">
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
                    <ProfilePageInputfeild label="Full Name" type="text" required={true} />
                    <ProfilePageInputfeild label="DOB" type="date" required={true} />
                    <ProfilePageDropdownFeild label="Gender" values={["Male", "Female", "Others"]} required={true}  />
                    <ProfilePageInputfeild label="Email" type="email" required={true} />
                    <ProfilePageInputfeild label="Contact Number" type="tel" required={true} />
                    <ProfilePageInputfeild label="OTP" type="text" />
                    <ProfilePageInputfeild label="Current Location" type="text" required={true} />
                    <ProfilePageDropdownFeild label="Preferred Location" values={["Delhi", "Kolkata", "Mumbai"]}required={true}  />
                    <ProfilePageDropdownFeild label="Job Type" values={["Remote", "On-Site", "Hybrid"]} required={true} />
                    <div className="ProfilePagefileinput">
                        <label htmlFor="">Resume</label> <br />
                        <input type="file" accept="application/pdf" />
                    </div>
                    <h3>Education</h3>
                    <ProfilePageInputfeild label="University/College Name" type="text" required={true} />
                    <ProfilePageDropdownFeild label="Qualification" values={["BCA", "B-tech", "BE"]} required={true} />
                    <ProfilePageInputfeild label="Specialization" type="text" />
                    <ProfilePageDropdownFeild label="Year Of Passing" values={[2022, 2023, 2024, 2025]} required={true} />

                </div>
                <div className="porfile-page-experience-section">
                    <h3>Professional Experience</h3>
                    <ProfilePageInputfeild label="Current Designation" type="text" />
                    <ProfilePageInputfeild label="Current Organisation Name" type="text" />
                    <ProfilePageInputfeild label="Total Experience in Year" type="number" />
                    <ProfilePageInputfeild label="Total Experience in Month" type="number" />
                    <ProfilePageDropdownFeild label="Notice Period in Month" values={[0, 1, 2, 3]} />
                    <ProfilePageDropdownFeild label="Skills" values={["Front-end developer", "Back-end developer", "Full-stack developer"]} required={true}  />
                    <ProfilePageInputfeild label="No of Projects Completed" type="number" />
                    <ProfilePageInputfeild label="Current Payout in Month" type="number" />
                    <ProfilePageInputfeild label="Expected Payout in Month" type="number" />
                    <h3>Social links</h3>
                    <ProfilePageInputfeild label="Linkedin" type="url" required={true} />
                    <ProfilePageInputfeild label="GitHub" type="url" />
                    <button type="submit" >Save profile</button>
                </div>
            </div>
        </form>
    )
}

export default ProfilePage