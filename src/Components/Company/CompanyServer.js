
import API from "../API";
async function InsertCompanyData(data,navigatefun){
   
    try{
        var headers={
            Name:"hello"
        }
      const response=fetch(API+"company/insertcompany",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      ).then(async res=>{
        if(!res.ok){
          throw new Error("Status:",res.status);
        }
        return await res.json();
      })
      .then(async result=>{
        // const {token,role,userId}=await result;
         localStorage.clear();
         navigatefun("/"); 
      }).catch(err=>alert(err))
      }catch(err){
        console.error("Error: ",err);
        alert("Error:",err)
    }
  }
  async function InsertJob(data,navigatefun){
    try{
        var headers={
            Name:"Hello"
        }
      const response=fetch(API+"company/addjob",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      ).then(async res=>{
        if(!res.ok)
          throw new Error("Error :",res.status)
        return await res.json();
      }).then(result=>{
        if(parseInt(result.data)>=1)
          navigatefun("/company");
        else{
          alert("Already Exsits the job title");
          navigatefun("/company");
        }
          
      }).catch(err=>{
        alert(err);
      })
     

    }catch(err){
        console.error("Error: ",err);
    }
}
async function InsertInterviewData(data,navigatefun){
    try{
        var headers={
            
        }
      const response=fetch(API+"company/scheduleinterview",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      ).then(async res=>{
        if(!res.ok){
          throw new Error("Status:",res.status);
        }
        return await res.json();
      }) 
      .then(async result=>{

        navigatefun("/company");
  
      }).catch(error=>{
        alert("Error:",error)
      })
     
  
    }catch(err){
        console.error("Error: ",err);
        alert("Error:",err)
    }
  }
  async function GetAllJobsByCompanyId(companyId,setdata){
    const response=fetch(API+"company/getalljobsbycompanyid/"+companyId,
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    ).then(async res=>await res.json())
    .then(async result=>{
      debugger;
       setdata(await result.data);
    }).catch(error=>{
      alert("Error:",error)
    })
  }
  async function GetSheduledInterViews(jobId,setdata){
    const response=fetch(API+"company/getsheduledinterViews/"+jobId,
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    ).then(async res=>await res.json())
    .then(async result=>{
      debugger;
       setdata(await result.data);
    }).catch(error=>{
      alert("Error:",error)
    })
  }
  async function GetStudentsAppliedForJob(jobId,setdata){
    const response=fetch(API+"company/getstudentsappliedforjob/"+jobId,
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    ).then(async res=>await res.json())
    .then(async result=>{
      debugger;
      console.log(result.data);
       setdata(await result.data);
    }).catch(error=>{
      alert("Error:",error)
    })
  }
  async function DeleteJob(jobId,setdata){
    const response=fetch(API+"company/deletejob/"+jobId,
    {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    }
    ).then(async res=>await res.json())
    .then(async result=>{
      debugger;
       setdata(pv=>{
        return {
          ...pv.filter(x=>x.jobId!=jobId)
        }
       }

       );
    }).catch(error=>{
      alert("Error:",error)
    })
  }
  export {InsertCompanyData,InsertInterviewData,InsertJob,GetSheduledInterViews,GetAllJobsByCompanyId,GetStudentsAppliedForJob,DeleteJob};
