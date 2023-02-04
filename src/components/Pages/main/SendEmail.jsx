import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'

function SendEmail() {
  return (
    <div className="container">
            <Dashboard/>

      <div className="card">
        <div className="card-header">
          <h2>Send Email to Registered Candidates</h2>
          <p>Select appropriate way from below in which you want sent email</p>
        </div>
        <div className="card-footer">
          <Link to="/registeredcanditate"><button className="btn btn-primary">Send Email to all Registerded Candidate</button></Link> <br /> <br />
         <Link to="/selected-candidate"> <button className="btn btn-primary">Send Email to Single or Batch of Candidate  </button></Link>
        </div>
      </div>
    </div>
  )
}

export default SendEmail