import React from "react";
import Dashboard from "../dashboard/Dashboard";

function AddQuestions() {
  return (
    <div className="container">
      <Dashboard/>
      <div class="mb-3 row">
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
        <div className="col-sm-2 ">
          <label for="inputPassword" class=" col-form-label">
            Type of Exam :*
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
        <div className="col-sm-2 ">
          <label for="inputPassword" class=" col-form-label">
            Select excel File
          </label>
        </div>
        <div class="col-sm-10">
          <div>
            <input type="file" />
          </div>
        </div>
        
      </div>
      <div className="btn btn-primary">Import</div>
    </div>
  );
}

export default AddQuestions;
