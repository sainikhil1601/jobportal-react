import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../logout";
function StudentHeader(props) {
    var navigate=useNavigate();
    function logoout(){
     Logout(navigatefun);
    }
    function navigatefun(url){
        navigate(url);
    }
    return (<header>
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <p className="navbar-brand">JOB PORTAL</p>
                </div>
                <ul className="nav navbar-nav navbar-right">

                    <li ><Link href="/student">HOME</Link></li>
                    <li> <button onClick={()=>props.handleShowApplied()} className="btn btn-primary button-padding">APPLIED JOBS</button></li>
                    <li><button onClick={()=>props.handleShowInterViews()}  className="btn btn-primary button-padding">INTERVIEWS</button></li>
                    <li><button onClick={logoout} className="btn btn-primary button-padding">Logout</button></li>
                </ul>
            </div>
        </nav>

    </header>);
}
export default StudentHeader;