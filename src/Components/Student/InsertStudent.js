import React, { useState } from "react";
import './InsertStudent.css';
import { InsertStudentData1 } from "./StudentServer";
import { useNavigate } from "react-router-dom";

function InsertStudent() {
  if(!!localStorage.role || localStorage.role!=="student")
      navigate("/");
  var navigate = useNavigate();
  const [skillSet, setSkillSet] = useState([]);
  const [preferredLocations, setPreferredLocations] = useState([]);
  const [studentData, setStudentData] = useState({
    StudentId: localStorage.userId,
    studentskills: [],
    skill: "",
    address: "",
    pincode: "",
    city: "",
    ResumeFile: null,
    preferredLocation: "",
    preferredLocations: []
  });

  function addSkill(event) {
    const value = studentData.skill;
    setSkillSet(prevValues => [...prevValues, value]);
    setStudentData(prevData => ({ ...prevData, skill: "" }));
  }

  function addLocation(event) {
    const value = studentData.preferredLocation;
    setPreferredLocations(prevValues => [...prevValues, value]);
    setStudentData(prevData => ({ ...prevData, preferredLocation: "" }));
  }

  function handleChange(event) {
    const { name, files, value } = event.target;
    if (name === "ResumeFile") {
      // Handle file input separately
      setStudentData(prevData => ({
        ...prevData,
        [name]: files && files.length > 0 ? files[0] : null
      }));
    } else {
      // Handle other input elements
      setStudentData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  }
  function navigatefun(url){
    navigate(url);
  }
  function removeSkill(skill) {
    setSkillSet(prevValues => prevValues.filter(x => x !== skill));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    studentData.Address = studentData.address + "," + studentData.city + "-" + studentData.pincode;
    studentData.studentskills = skillSet;
    studentData.preferredLocations = preferredLocations;
    studentData.StudentId = localStorage.userId;

    console.log(studentData);

    await InsertStudentData1(studentData,navigatefun);
    

   
  }

  return (
    <div className="container">
      <div className="apply_box">
        <h1>
          Job Application
          <span className="title_small"></span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <div className="form_control">
              <label htmlFor="skills"> Skill Set </label>
              <input
                type="text"
                id="skills"
                name="skill"
                value={studentData.skill}
                onChange={handleChange}
                placeholder="Enter Skill Set..."
              />
              <div className="button_container">
                <button type="button" onClick={addSkill}>Add Skill</button>
              </div>
              
              <label htmlFor="skillsarray"> Skills </label>
              <ul>
                {skillSet.map(ele => (
                  <li key={ele} onClick={() => removeSkill(ele)}>
                    {ele}
                  </li>
                ))}
              </ul>
              <span id="skills_error" className="error"></span>
            </div>
            <div className="form_control">
              <label htmlFor="preferredLocation"> Preferred Location </label>
              <input
                type="text"
                id="preferredLocation"
                name="preferredLocation"
                value={studentData.preferredLocation}
                onChange={handleChange}
                placeholder="Enter Preferred Location..."
              />
              <div className="button_container">
                <button type="button" onClick={addLocation}>Add Location</button>
              </div>
              <label htmlFor="locationsArray"> Preferred Locations </label>
              <ul>
                {preferredLocations.map(location => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </div>
            <div className="field">
               <label>Resume</label>
                <input
                  type="file"
                  name="ResumeFile"
                  onChange={handleChange}
                  placeholder="Resume"
                  required
                />
              </div>
            <div className="textarea_control">
              <label htmlFor="address"> Address </label>
              <textarea
                id="address"
                name="address"
                rows="4"
                cols="50"
                onChange={handleChange}
                placeholder="Enter Address"
              ></textarea>
              <span id="address_error" className="error"></span>
            </div>
            <div className="form_control">
              <label htmlFor="city"> City </label>
              <input
                id="city"
                name="city"
                onChange={handleChange}
                placeholder="Enter City Name..."
              />
              <span id="city_error" className="error"></span>
            </div>
            <div className="form_control">
              <label htmlFor="pincode"> Pincode </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                onChange={handleChange}
                placeholder="Enter Pincode..."
              />
              <span id="pincode_error" className="error"></span>
            </div>
          </div>
          <div className="button_container">
            <button type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InsertStudent;
