import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../logout";
function CompanyHeader(){
    var navigate=useNavigate();
    function logoout(){
     Logout(navigatefun);
    }
    function navigatefun(url){
        navigate(url);
    }
   return( 
   <header>
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <p className="navbar-brand">JOB PORTAL</p>
            </div>
            <ul className="nav navbar-nav navbar-right">

                <li id="home"><Link to="/company">HOME</Link></li>
                <li id="about"><Link to="/company/postjob">POST JOB</Link></li>
                <li id="contact"><button onClick={logoout} className="btn btn-primary button-padding">Logout</button></li>
            </ul>
        </div>
    </nav>
    </header>);
}
export default CompanyHeader;