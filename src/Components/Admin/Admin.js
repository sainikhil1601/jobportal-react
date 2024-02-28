import React, { useEffect, useState } from 'react';
import './adminstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


import { getcompanies, getjobpostedtoday, unverifiedCompanies, verifyaccount } from './AdminServer';
import { GetAllJobsByCompanyId } from '../Company/CompanyServer';
import { useNavigate } from 'react-router-dom';
import Logout from '../../logout';

function Admin() {
    const navigate=useNavigate();
    
   
    
    const [disdata, setDisData] = useState([]);
    useEffect(() => {
      
        const fetchData = async () => {
            await unverifiedCompanies(setDisData);
        };
        fetchData();
    }, []);

    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4,setShowDiv4]=useState(false);
    const showDiv = async (divNumber) => {
        if (divNumber === 1) {
            setShowDiv1(true);
            setShowDiv2(false);
            setShowDiv3(false);
            setShowDiv4(false);
            await unverifiedCompanies(setDisData);
        } else if (divNumber === 2) {
            setShowDiv1(false);
            setShowDiv2(true);
            setShowDiv3(false);
            setShowDiv4(false);
            await getjobpostedtoday(setDisData);
        } else if (divNumber === 3) {
            setShowDiv1(false);
            setShowDiv2(false);
            setShowDiv3(true);
            setShowDiv4(false);
            await getcompanies(setDisData);
        } else if (divNumber === 4) {
            setShowDiv1(false);
            setShowDiv2(false);
            setShowDiv3(false);
            setShowDiv4(true);
           
        } 
        
    };

    async function verifyCompany(id) {
        await verifyaccount(id, setDisData);
    }
    async function getalljobs(id){
        await showDiv(4);
        await GetAllJobsByCompanyId(id,setDisData);
    }
     function logout(){
     Logout(navigatefun);
    }
    function navigatefun(url){
        navigate(url);
    }
    return (
        <div>
            <h2>ADMIN PAGE</h2>
            <div className="header-buttons">

                <button onClick={() => showDiv(1)}>Unverified Companies</button>
                <button onClick={() => showDiv(2)}>Jobs Posted Today</button>
                <button onClick={() => showDiv(3)}>Get All Companies</button>
                <button onClick={()=>logout()}>Logout</button>
            </div>

            <div className="post-job-container">

                {showDiv1 && !!disdata.length && (
                    <div className="div1 admin-grid">
                        {disdata.map((ele) => (
                            <div className="centered" key={ele.companyId}>
                                <h1>{ele.title}</h1>
                                <h2>{ele.ownerName}</h2>
                                <p>{"Locations: " + ele.companyLocations}</p>
                                <button onClick={()=>{verifyCompany(ele.companyId)}}>Verify Company</button>
                                </div>
                        ))}
                    </div>
                )}
                {showDiv2 && <div className="div2">
                    {disdata.map((ele) => (
                        <div className="centered" key={ele.jobId}>
                            <h1>{ele.title}</h1>
                            <h2>{ele.companyName}</h2>
                             <p>Package:{ele.salary}</p>
                                {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> */}
                            <p> {"Skills: " + ele.requiredSkills}</p>
                            
                        </div>
                    ))}
                </div>}
                {showDiv3 && (
                    <div className="div3 admin-grid">
                        {disdata.map((ele) => (
                            <div className="centered" key={ele.companyId}>
                                <h1>{ele.name}</h1>
                                <h2>{ele.ownerName}</h2>
                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                    {"Locations: " + ele.companyLocations}</p>
                                <button onClick={()=>{getalljobs(ele.companyId)}}>LIST ALL</button>
                            </div>
                        ))}

                    </div>
                )}
                {showDiv4 && (
                    <div className="div3 admin-grid">
                        {disdata.map((ele) => (
                            <div className="centered" key={ele.companyId}>
                                <h1>{ele.title}</h1>
                                <h2>{ele.requiredSkills}</h2>
                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                    {"Locations: " + ele.locations}</p>
                                
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin;
