import React, { useState } from "react";
import { InsertUser, InsertUser1 } from "./UserServer";
import "./styles.css";
import { useNavigate } from "react-router-dom";
function Signup(){
    const navigate=useNavigate();
    
    const [user,setuser]=useState({
        FirstName:"",
        LastName:"",
        Age:0,
        
        Email:"",
        Password:"",
        PhoneNumber:"",
        Role:""
    });
    async function handleSignup(event){
      event.preventDefault();
      user.Age=calculateAge(user.Age);
    
      await InsertUser(user,navigatefun);
       
    }
    function navigatefun(url){
      navigate(url);
    }
    function handleChange(event){
        const {name,files,value}=event.target;
        if(name==="ResumeFile"){
          setuser((prevValues)=>{
            return{
              ...prevValues,
              
              [name]:files?files[0]:value
            }
        })
        }
          
        setuser((prevValues)=>{
            return{
              ...prevValues,
              
              [name]:value
            }
        })
    }
    function calculateAge(dateOfBirth) {
        const currentDate = new Date();
        const dob = new Date(dateOfBirth);
        
        let age = currentDate.getFullYear() - dob.getFullYear();
        
        // Adjust age for months and days
        const currentMonth = currentDate.getMonth();
        const dobMonth = dob.getMonth();
        
        if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDate.getDate() < dob.getDate())) {
          age--;
        }
        
        return age;
      }
    return (
        <form onSubmit={handleSignup} className="signup-form">
          <div className="field">
            <input type="email" onChange={handleChange} name="Email" value={user.Email} placeholder="Email Address" required />
          </div>
          <div className="field">
            <input type="text" name="FirstName" onChange={handleChange} value={user.FirstName} placeholder="First Name" required />
          </div>
          <div className="field">
            <input type="text" name="LastName" onChange={handleChange} value={user.LastName} placeholder="Last Name" required />
          </div>
          
          <div className="field">
            <input type="date" name="Age" value={user.Age} onChange={handleChange}  placeholder="Last Name" required />
          </div>
          
          <div className="field">
            <input type="tel" name="PhoneNumber" onChange={handleChange} value={user.PhoneNumber} placeholder="Contact Number" required />
          </div>
          <div className="field">
            <select className="custom-dropdown" onChange={handleChange} name="Role" value={user.Role}>
              <option value="" disabled defaultValue className="options-list">
                Select UserType
              </option>
              <option value="Student">Student</option>
              <option value="Company">Company</option>
            </select>
          </div>
          <div className="field">
            <input type="password" onChange={handleChange} name="Password" value={user.Password} placeholder="Password" required />
          </div>
          <div className="field">
            <input type="password" onChange={handleChange} name="ConfirmPassword" placeholder="Confirm password" required />
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Signup" />
          </div>
        </form>
      );
  
}
export default Signup;
