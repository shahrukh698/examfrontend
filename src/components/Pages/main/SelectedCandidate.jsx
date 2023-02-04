import React from "react";
import Dashboard from "../dashboard/Dashboard";


function SelectedCandidate() {
  return (
    <div className="container">
      <Dashboard/>

      <div className="card">
        <div className="card-header">
          <h1 style={{ fontSize: "30px" }}>Send Email</h1>

          <p>Send Email to selected Candidate or single Candidate </p>
        </div>
        
          <form>
            <div class="mb-3 mt-3">
              <label for="email" class="form-label">
                Select Exam:
              </label>
              <select class="form-select">
                <option>--Select Exam--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div class="mb-3 mt-3">
              <label for="email" class="form-label">
                Select Invigilator:
              </label>
              <select class="form-select">
                <option>--Select Invigilator--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">
              Send Bulk
            </button>
          </form>
         
        </div>
        <table class="table table-primary table-striped mb-3 mt-3">
          <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Enrollment No.</th>
      <th scope="col">Branch</th>
      <th scope="col">Semester</th>
      <th scope="col">Email Id</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Select</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Demo User</th>
      <td>Demo User</td>
      <td>Computer</td>
      <td>7</td>
      <td>demo@gmail.com</td>
      <td>982456987</td>
      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
      <td> <button style={{fontSize:"12px"}} type="button" class="btn btn-primary">Send Single</button></td>
      
    </tr>
    <tr>
      <th scope="row">Demo User</th>
      <td>Demo User</td>
      <td>Computer</td>
      <td>7</td>
      <td>demo@gmail.com</td>
      <td>982456987</td>
      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
      <td> <button style={{fontSize:"12px"}} type="button" class="btn btn-primary">Send Single</button></td>
      
    </tr>
    <tr>
      <th scope="row">Demo User</th>
      <td>Demo User</td>
      <td>Computer</td>
      <td>7</td>
      <td>demo@gmail.com</td>
      <td>982456987</td>
      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
      <td> <button style={{fontSize:"12px"}} type="button" class="btn btn-primary">Send Single</button></td>
      
    </tr>
    <tr>
      <th scope="row">Demo User</th>
      <td>Demo User</td>
      <td>Computer</td>
      <td>7</td>
      <td>demo@gmail.com</td>
      <td>982456987</td>
      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
      <td> <button style={{fontSize:"12px"}} type="button" class="btn btn-primary">Send Single</button></td>
      
    </tr>
    </tbody>
</table>
        </div>
  )
}

export default SelectedCandidate;
