
import API from "../API";
async function unverifiedCompanies(setdata){
    const result=fetch(API+"admin/getallunverifiedcompanies",
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }
   
    ).then(res=>res.json())
    .then(result=>{
       setdata(result.data);
       console.log(result.data);
    })
    
}
async function verifyaccount(id,setdata){
    const response=fetch(API+"admin/verifycompany/"+id,
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }
    ).then(async x=>{
       await unverifiedCompanies(setdata); 
    })
    
}
async function getjobpostedtoday(disdata){
    const response=fetch(API+"admin/getjobpostedtoday",
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }
    ).then(res=>res.json())
    .then(result=>{
        console.log(result.data);
        debugger;
        disdata(result.data);
    })

}
async function getcompanies(disdata){
    const response=fetch(API+"admin/getcompanies",
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }
    ).then(res=>res.json())
    .then(result=>{
        console.log(result.data);
        disdata(result.data);
    })
}
export {unverifiedCompanies,getcompanies,getjobpostedtoday,verifyaccount};