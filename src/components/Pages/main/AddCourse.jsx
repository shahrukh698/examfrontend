import React from 'react'
import Dashboard from '../dashboard/Dashboard';

function AddCourse() {
  return (
    <div className="container">
      <Dashboard/>
    <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="Course">Course Name:</label>
      <input type="Course" class="form-control" id="Course" placeholder="Enter course" name="Course"/>
    </div>
    <div class="mb-3">
      <label for="pwd">Course ID:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter course-id" name="pswd"/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}


export default AddCourse;