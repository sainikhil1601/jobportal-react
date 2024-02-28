import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";
import './styles.css';
function Home(){
    const [showLogin,setshowLogin]=useState(true);
    function handleSliderChange(){
        setshowLogin(!showLogin); 
    }
    return (
      
      <div  className="divform-login">
     
        <div className="wrapper">
          <div className="title-text">
            <div className={`title ${showLogin ? 'login' : 'signup'}`}>
              {showLogin ? 'Login Form' : 'Signup Form'}
            </div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input
                type="radio"
                name="slide"
                id="login"
                checked={showLogin}
                onChange={handleSliderChange}
              />
              <input
                type="radio"
                name="slide"
                id="signup"
                checked={!showLogin}
                onChange={handleSliderChange}
              />
              <label htmlFor="login" className="slide login">
                Login
              </label>
              <label htmlFor="signup" className="slide signup">
                Signup
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              {showLogin ? <Login handleChange={handleSliderChange} />: <Signup />}
            </div>
          </div>
        </div>
        </div>
      );
}
export default Home;