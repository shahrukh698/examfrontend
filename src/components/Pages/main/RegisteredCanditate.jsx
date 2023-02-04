import React from 'react'
import Dashboard from '../dashboard/Dashboard';

function RegisteredCanditate() {
  return (
   <div className="container">
      <Dashboard/>

    <div className="card">
        <div className="card-header">
            <h3>Send Email</h3>
            <p>clicking on send button will send email to all registered Students</p>
        </div>
    </div>
    <div class="mb-3 row ">
        <div className="col-sm-2">
          <label for="inputPassword" class=" col-form-label">
            Exam Name:*
          </label>
        </div>
        <div class="col-sm-10 mb-2">
          <select class="form-select" aria-label="Default select example">
            <option selected>--Select Exam--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
       
          </div>
          </div>
          <div class="mb-3 row">
        <div className="col-sm-2">
          <label for="inputPassword" class=" col-form-label">
            Select Invigilator:*
          </label>
        </div>
        <div class="col-sm-10 mb-2">
          <select class="form-select" aria-label="Default select example">
            <option selected>--Select Exam--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
       
          </div>
          </div>
          <div className="btn btn-primary">Send</div>
   </div>
  

  )
}

export default RegisteredCanditate;