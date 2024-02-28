import React, { useState } from 'react';
import { InsertJob } from './CompanyServer';
import './PostJob.css';
import { useNavigate } from "react-router-dom";
function PostJob() {
  var navigate=useNavigate();
  
   if(localStorage.role!=="company"){
    navigate("/");
   }
  const[RequiredSkills,setRequiredSkills]=useState([]);
  const [postjob, setpostjob] = useState({
    CompanyId: "",
    Salary: "",
    Description: "",
    RequiredSkills: "",
    Title: "",
    skill: ""
  });

  
  async function handleSubmit(event) {
    event.preventDefault();
    postjob.CompanyId = localStorage.companyId;
    postjob.RequiredSkills = [...new Set(RequiredSkills)];
    // Add your form submission logic here
    await InsertJob(postjob,navigatefun);
  }
  function navigatefun(url){
    navigate(url);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setpostjob(prevValues => {
      return {
        ...prevValues,
        [name]: value
      }

    })
  }
  function addSkill(event) {
    const value = postjob.skill;
    setpostjob(p=>{
      return{
        ...p,
         skill:""
      }
    })
    setRequiredSkills(prevValues => [...prevValues, value]);
  }
  function removeItem(item){
    setRequiredSkills(p=>[...p.filter(x=>x!=item)])
  }
  return (
    <div className="post-job-container">
      <h1>Job Posting</h1>
      <form onSubmit={handleSubmit}>

        <label>Job Title</label>
        <input
          type="text"
          name="Title"
          onChange={handleChange}
          value={postjob.Title}
        />
        <label>Salary</label>
        <input
          type="number"
          name='Salary'
          onChange={handleChange}
          value={postjob.Salary}
        />
        <label>Description</label>
        <textarea
          rows="4"
          cols="50"
          name='Description'
          onChange={handleChange}
          value={postjob.Description}
        ></textarea>
        <label>Skill</label>
        <input type="text" onChange={handleChange} name="skill" value={postjob.skill} />
        <button type="button" onClick={addSkill} >Add Skill</button>
        {RequiredSkills.length > 0 && <label>Skills</label>}
        <ul>
          {RequiredSkills.map((x) => {
            return <li onClick={() => { removeItem(x) }}>{x}</li>
          })}
        </ul>
        <button type="submit">Add Job</button>
        
      </form>
    </div>
  );
}

export default PostJob;
