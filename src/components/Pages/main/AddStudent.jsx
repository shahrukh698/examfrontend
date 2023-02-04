import React from "react";
import {Link} from "react-router-dom"
import Dashboard from "../dashboard/Dashboard";

function AddStudent() {
  return (
    <div className="container">
            <Dashboard/>

      <div className="card">
        <div className="card-header">
          <h4 style={{fontSize:"20px"}}>Select appropriate way from below in which you want to Add Students </h4>
        </div>
        <div className="card-footer">
            <Link to="/add-student/add-manual">
          <button className="btn btn-primary">
          
         <span style={{fontSize:"20px"}}>   Add Students Manually through portal</span> <br />
            <span>Single student at the time</span>
          </button></Link> <br /><br />
           <Link to="/add-upload">
          <button className="btn btn-primary">
         <span style={{fontSize:"20px"}}>   Add Students by Uploading Excel file</span> <br />
            <span>Single student at the time</span>
          </button> </Link>
        
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
