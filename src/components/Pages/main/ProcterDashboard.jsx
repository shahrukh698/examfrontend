import React from 'react'
import Dashboard from '../dashboard/Dashboard';

function ProcterDashboard() {
  return (
        <>
                <Dashboard/>

        <div className="container">
        <h3>CandidateDetails</h3>

        <div className="row mt-4 mb-4">
        <div className="col-2">
          <p>Course Name </p>
        </div>
        <div className="col-6 mb-4">
        <select class="form-select">
            
                <option hidden>--Select Candidate--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
               </select>
                </div>
             <div className="col-2">
             <button style={{fontSize:"15px"}} type="button" class="btn btn-primary">Send Single</button>
                </div>  
        </div>
        </div>
        </>
        
        
        
   
    
  )
}

export default ProcterDashboard;