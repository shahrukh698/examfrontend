import React from "react";
import axios from "axios"
import {useState,useEffect} from "react"
import { useNavigate,useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "../dashboard/Dashboard";

function AddManual() {
  let navigate = useNavigate();
  

  const [inputField , setInputField] = useState({
    course_name: '',
    student_name: '',
    enrolment_no: '',
    branch: '',
    semester: '',
    email_id:'',
    mobile_no:'',
    password:'',

})


const inputsHandler = (e) =>{
  const { name, value } = e.target;
 setInputField((prevState) => ({
   ...prevState,
   [name]: value,
   
 }));
}
const submitButton = () =>{
  
  
// toast("Submitted Successfullly")
  // alert("Successfully Inserted");
  

  
   
  const addManualData={
    course_name:inputField.course_name,
    student_name:inputField.student_name,
    enrolment_no:inputField.enrolment_no,
    branch:inputField.branch,
    semester:inputField.semester,
    mobile_no:inputField.mobile_no,
    password:inputField.password,
  }
  axios
  .post("http://localhost:3001/AddManual", { addManualData: addManualData })
  .then((res) => {
    if (res.data.isSuccess=== 422 || !addManualData) {
      
  } else {
      setInputField({
          ...inputField,course_name: '',
          student_name: '',
          enrolment_no: '',
          branch: '',
          semester: '',
          email_id:'',
          mobile_no:'',
          password:'',
      });
     
    }
    
  })

 

   navigate("/student-list")
  .catch((err) => console.log(err));
  toast("Submitted Successfullly")
 
}
  return (
    <div className="container">
       <Dashboard/>
      <div className="card">
        <div className="card-header">
          <h1 style={{ fontSize: "30px" }}>Add Student</h1>
          <br />
          <span>Clicking on add button will add student</span>
        </div>
      </div>

      <form>
      <div className="mb-3 mt-3">
      <label for="course_name" className="form-label">Course Name</label>
      <select className="form-select" name='course_name' onChange={inputsHandler} value={inputField.course_name}>
     <option value={"Frontend Developer"}>Frontend Developer</option>
     <option value={"Backend Developer"}>Backend Developer</option>
     <option value={"Full Stack"}>Full Stack</option>
     <option value={"UI/UX Design"}>UI/UX Design</option>
   </select>
    </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="student_name"
            placeholder="Enter Student Name"
            name="student_name"  onChange={inputsHandler} value={inputField.student_name}
          />
        </div>
        <div className="mb-3">
          <label for="enrolment_no" className="form-label">
            Enrolment No.
          </label>
          <input
            type="text"
            className="form-control"
            id="pwd"
            placeholder="Enter Enrolment No."
            name="enrolment_no" onChange={inputsHandler} value={inputField.enrolment_no}
          />
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Branch
          </label>
          <input
            type="text"
            className="form-control"
            id="pwd"
            placeholder="Enter Branch"
            name="branch" onChange={inputsHandler} value={inputField.branch}
          />
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Semester
          </label>
          <input
            type="text"
            className="form-control"
            id="pwd"
            placeholder="Enter Semester"
            name="semester" onChange={inputsHandler} value={inputField.semester}
          />
        </div>
        <div className="mb-3">
          <label for="email_id" className="form-label">
            Email Id
          </label>
          <input
            type="text"
            className="form-control"
            id="pwd"
            placeholder="Enter Email Id"
            name="email_id" onChange={inputsHandler} value={inputField.email_id}
          />
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Mobile No
          </label>
          <input
            type="text"
            className="form-control"
            id="pwd"
            placeholder="Enter Mobile No"
            name="mobile_no" onChange={inputsHandler} value={inputField.mobile_no}
          />
        </div>

        <div className="mb-3">
          <label for="pwd" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter Password"
            name="password" onChange={inputsHandler} value={inputField.password}
          />
        </div>
        <button style={{marginBottom:"40px"}} type="submit" className="btn btn-primary" onClick={submitButton}>
          Add
        </button>
      </form>
     
    </div>
  );
}

export default AddManual;
