import * as Yup from "yup"

const InitialValues = {
    fullName: "",
    dob: "",
    gender:"Male",
    email:"",
    contactNumber:"",
    OTP:"",
    currentLocation:"",
    prefferredLocation:"Delhi",
    jobType:"Remote",
    currentDesgination:"",
    currentOrganisation:"",
    totalExperieneYear:"",
    totalExperieneMonth:"",
    noticePeriodMonth:"",
    skills:"",
    projectCompleted:"",
    currentPayoutMonth:"",
    expectedPayoutMonth:"",
    university:"",
    qualification:"",
    speclization:"",
    grudationYear:"",
    linkedin:"",
    github:"",
    profilePhoto:"",
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validation = Yup.object({
    fullName:Yup.string().min(3,"Minimum 3 character required").required("Required"),
    dob: Yup.date().required("Required"),
    gender:Yup.string().oneOf(["Male","Female","Others"]),
    email:Yup.string().email("Enter valid email").required("Required"),
    contactNumber:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required"),
    OTP:"",
    currentLocation:Yup.string().required("Required"),
    prefferredLocation:Yup.string().oneOf(["Delhi","Mumbai","Kolkata"]),
    jobType:Yup.string().oneOf(["Remote","On-Site","Hybrid"]),
    currentDesgination:"",
    currentOrganisation:"",
    totalExperieneYear:"",
    totalExperieneMonth:"",
    noticePeriodMonth:"",
    skills:Yup.string().oneOf(["Front-end developer","Back-end developer","Full-stack developer"]).required("Required"),
    projectCompleted:"",
    currentPayoutMonth:"",
    expectedPayoutMonth:Yup.string().required("Required"),
    university:Yup.string().required("Required"),
    qualification:Yup.string().oneOf(["BCA","B-tech","BE"]),
    speclization:"",
    grudationYear:Yup.string().oneOf(["2022","2023","2024","2025"]),
    linkedin:Yup.string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    )
    .required('Linkedin required'),
    github:Yup.string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    ),
})

export {InitialValues,validation}

