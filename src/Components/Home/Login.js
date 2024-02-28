import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'
import { LoginUserData } from "./UserServer";
function Login(props){
    var navigate=useNavigate();
    const [loginUser,setLoginUser ]=useState({LEmail:"",LPassword:""});
    async function LoginUser(event){ 
   
   event.preventDefault();
   await  LoginUserData(loginUser,navigatefun);
   
    }
    function navigatefun(url){
      navigate(url);
    }
    function handleChange(event){
      const{name,value}=event.target; console.log(name,value);
      setLoginUser(previousValue=>{return{
        ...previousValue,
        [name]:value
      }})
    }
    
    return (
      <div  className="divform-login">
        <form onSubmit={LoginUser} className="login">
          
          <div className="field">
            <input onChange={handleChange} type="text" name="LEmail" placeholder="Email Address" required value={loginUser.LEmail } />
      
          </div>
          <div className="field">
            <input onChange={handleChange} type="password" name= "LPassword" placeholder="Password" required value={loginUser.LPassword} />
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            New User <a href="#signup" onClick={()=>{props.handleChange()}}>Signup now</a>
          </div>
        </form>
        </div>
      );
}
export default Login;