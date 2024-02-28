import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InsertInterviewData } from "./CompanyServer";
import './PostJob.css';

function InsertInterview() {
    const {appliedJob}=useParams();
    const navigate=useNavigate();
   
   if(localStorage.role!=="company"){
    navigate("/");
   }
    const [interviewData,setInterviewData]=useState(
        {
            AppliedId:"",
            InterViewMode:"",
            InterViewDate:"",
            InterViewLocation:"",
            IDate:"",
            ITime:""
        }
    );
    function handleChange(event){
        const {name,value}=event.target;
        setInterviewData(prevValues=>{
            return{
                ...prevValues,
                [name]:value
            }
        })
    }
    function navigatefun(url){
        navigate(url);
    }
   async function handleSubmit(event){
      event.preventDefault();
      const [hrs,min]=interviewData.ITime
      var date=new Date(interviewData.IDate)
      date.setHours(hrs)
      date.setMinutes(min)
      interviewData.AppliedId=appliedJob;
      interviewData.InterViewDate=date;
      await InsertInterviewData(interviewData,navigatefun);
    }
    return (
        <div className="post-job-container">
            
            <h1>Schedule Interview</h1>
            <form onSubmit={handleSubmit}>
                

                

                <label htmlFor="interview-mode">Interview Mode</label>
                <select 
                    id="interview-mode" 
                    name="InterViewMode" 
                    required
                    value={interviewData.InterViewMode}
                    onChange={handleChange}
                >
                    <option value="" disabled defaultValue className="options-list" >Select Interview Mode</option>
                    <option value="Offline">In-Person</option>
                    <option value="Online">Virtual</option>
                </select>
                <span id="interview-mode-error" className="error"></span>

                
                <label htmlFor="date">Date</label>
                <input 
                    type="date" 
                    id="date" 
                    name="IDate"
                    value={interviewData.IDate} 
                    onChange={handleChange}
                    required
                />
                <span id="date-error" className="error"></span>
                <label htmlFor="timing">Timing</label>
                <input 
                    type="time" 
                    id="timing" 
                    name="ITime"
                    value={interviewData.ITime} 
                    onChange={handleChange}
                    required
                />
                <span id="timing-error" className="error"></span>

                {interviewData.InterViewMode==="Offline" &&
                <div>
                <label htmlFor="location">
                    <span className="location-icon">&#128205;</span>
                    Location
                </label>
                <input 
                    type="text" 
                    id="location" 
                    name="InterViewLocation"
                    onChange={handleChange}
                    value={interviewData.InterViewLocation}
                />
                <span id="location-error" className="error"></span>
                </div>}
                <button type="submit">Schedule Interview</button>
            </form>
        </div>
    );
} 

export default InsertInterview;