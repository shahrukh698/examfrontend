import React from 'react';
import axios from "axios";
import {useState} from 'react'
import Dashboard from '../dashboard/Dashboard';

function AddUpload() {
  function uploadFile(){
    var formData = new FormData();
    var imagefile = document.querySelector('#file');
    formData.append("image", imagefile.files[0]);
    axios.post('http://localhost:3001/fileupload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }  
    })
  }
  const [inputField , setInputField] = useState({
    course_name: '',
    

})
  const inputsHandler = (e) =>{
    const { name, value } = e.target;
   setInputField((prevState) => ({
     ...prevState,
     [name]: value,
     
   }));
  }
  return (
    <div className="container">
            <Dashboard/>

         <form id="uploadForm" enctype="multipart/form-data" onChange={uploadFile} >
      <div className="card">
        <div className="card-header">
          <h1 style={{ fontSize: "30px" }}>Add Student</h1>

          <p>Clicking on import button will add student</p>
        </div>

      </div>
      
        <div className="mb-3 mt-3">
      <label for="course_name" className="form-label">Course Name</label>
      <select className="form-select" name='course_name' onChange={inputsHandler} value={inputField.course_name}>
     <option value={"Frontend Developer"}>Frontend Developer</option>
     <option value={"Backend Developer"}>Backend Developer</option>
     <option value={"Full Stack"}>Full Stack</option>
     <option value={"UI/UX Design"}>UI/UX Design</option>
   </select>
    </div>
        <div className="col-2">
          <p>Select Excel File </p>
        </div>
        <div className="col-10">
     
        <input type="file" id="file" name="file"></input>
        </div>
      <br />
      <button type="button" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddUpload;