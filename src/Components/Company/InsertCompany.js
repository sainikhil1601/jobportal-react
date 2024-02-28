import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InsertCompanyData } from "./CompanyServer";


function InsertCompany(){
   var navigate=useNavigate();
   if(localStorage.role!=="company"){
    navigate("/");
   }
  const [cLoc,setCLoc]=useState([]);
  
  const [cdata,setcdata]=useState({
    Name:"",
    Description:"",
    OwnerId:"",
    CompanyLocations:cLoc,
    Loc:""
  })
  function handleChange(event){
    const {name,value}=event.target;
    setcdata(pre=>{
      return{
        ...pre,
        [name]:value
      }
    })
  }
  async function handleSubmit(event){
    cdata.OwnerId=localStorage.userId;
    cdata.CompanyLocations=[...new Set(cLoc)];
    await InsertCompanyData(cdata,navigatefun);
    event.preventDefault();
  }
  function addLoc(event){
    const value=cdata.Loc;
    setcdata(p=>{
     return{
      ...p,
      Loc:""
     }
    })
    setCLoc(p=>{
      return [...p,value]
    })
  }
  function removeItem(item){
    setCLoc(p=>[...p.filter(x=>x!=item)])
  }
  function navigatefun(url){
   navigate(url);
  }
  return<div className="post-job-container">
     <h1>Insert Company</h1>
    <form onSubmit={handleSubmit}>
    <label>Company Name</label>
    <input type="text" name="Name" onChange={handleChange} value={cdata.Name} />
    <label>Description</label>
    <textarea name="Description"
    rows="4"
    cols="50"
    onChange={handleChange}
    value={cdata.Description}
    >
    </textarea>
    <label>Company Locations</label>
    <input type="text" name="Loc" onChange={handleChange} value={cdata.Loc} />
    <button type="button" onClick={addLoc} >Add Location</button>
    {cLoc.length>0 && <label>Location</label>}
    <ul>
    {cLoc.map((x)=>{
      return <li onClick={()=>{removeItem(x)}}>{x}</li>
    })}
    </ul>
    <button type="submit">Submit</button>
    
    </form>
  </div>
}
export default InsertCompany;