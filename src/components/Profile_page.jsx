import React from "react";
import "./Profile_page.css"
import Profilephoto from "../assests/Avatar-Profile-Vector-PNG-File-removebg-preview.png"
import ProfilePageInputfeild from "./Profile_page-inputfeild";
import ProfilePageDropdownFeild from "./Profile_page-dropdowninput";

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <div className="porfile-page-profile-section">
                <img src={Profilephoto} alt="ProfilePhoto" />
                <h3>Username</h3>
                <p>username@gmail.com</p>
            </div>
            <div className="porfile-page-personal-section">
                <h2>Personal Details</h2>
                <div className="ProfilePagefileinput">
                    <label htmlFor="">Profile photo</label> <br />
                    <input type="file" accept="image/png, image/jpeg" />
                </div>
                <div className="ProfilePagefileinput">
                    <label htmlFor="">Resume</label> <br />
                    <input type="file" accept="application/pdf" />
                </div>
                <ProfilePageInputfeild label="Full name" type="text" />
                <ProfilePageInputfeild label="DOB" type="date" />
                <ProfilePageDropdownFeild label="Gender" values={["Male", "Female", "Others"]} />
                <ProfilePageInputfeild label="Email" type="email" />
                <ProfilePageInputfeild label="Contact number" type="tel" />
                <ProfilePageInputfeild label="OTP" type="text" />
                <ProfilePageInputfeild label="Current location" type="text" />
                <ProfilePageDropdownFeild label="Preferred location" values={["Delhi", "Kolkata", "Mumbai"]} />
                <ProfilePageDropdownFeild label="Job type" values={["Remote", "On-site", "Hybrid"]} />
                <h2>Education</h2>
                <ProfilePageInputfeild label="University/College name" type="text" />
                <ProfilePageDropdownFeild label="Qualification" values={["BCA", "B-tech", "BE"]} />
                <ProfilePageInputfeild label="Specialization" type="text" />
                <ProfilePageDropdownFeild label="Year of passing" values={[2022, 2023, 2024, 2025]} />

            </div>
            <div className="porfile-page-experience-section">
                <h2>Professional Experience</h2>
                <ProfilePageInputfeild label="Current designation" type="text" />
                <ProfilePageInputfeild label="Current Organisation name" type="text" />
                <ProfilePageInputfeild label="Total experience in year" type="number" />
                <ProfilePageInputfeild label="Total experience in month" type="number" />
                <ProfilePageDropdownFeild label="Notice period in month" values={[0, 1, 2, 3]} />
                <ProfilePageDropdownFeild label="Skills" values={["Front-end developer", "Back-end developer", "Full-stack developer"]} />
                <ProfilePageInputfeild label="No of projects completed" type="number" />
                <ProfilePageInputfeild label="Current payout in month" type="number" />
                <ProfilePageInputfeild label="Expected payout in month" type="number" />
                <h2>Social links</h2>
                <ProfilePageInputfeild label="Linkedin" type="url" />
                <ProfilePageInputfeild label="GitHub" type="url" />
                <button>Save profile</button>
            </div>
        </div>
    )
}

export default ProfilePage