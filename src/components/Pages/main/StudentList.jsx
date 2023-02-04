import React from 'react'
import { Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Dashboard from '../dashboard/Dashboard';

function StudentList() {
  const [addManual , setAddManual] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:3001/AddManual')
        .then(response => setAddManual(response.data.result));
       
       

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
// Delete request using axios inside useEffect React hook
const { id } = useParams();
const handleDelete = async (id) => {
 window.location.reload(false);
 console.log("id", id);
 await axios
   .post("http://localhost:3001/delete-AddManual", { id: id })
   .then((res) => {
     if (res.data.isSuccess) {
       // toast(res.data.success);
       alert(res.data.success)
     } else {
       // toast(res.data.success);
     }
   });
};

const [addUpload , setAddUpload] = useState([]);
useEffect(() => {
  // GET request using axios inside useEffect React hook
  axios.get('http://localhost:3001/AddUpload')
      .then(response => setAddUpload(response.data.result));
     
     

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div class="container mt-3">
      <Dashboard/>
    <div class="row height d-flex justify-content-center align-items-center">
   
   <div class="col-md-8">
   
     <div class="search">
       <i class="fa fa-search"></i>
       <input type="text" class="form-control" placeholder="Search" />
       <button class="btn btn-primary">Search</button>
     </div>
     
   </div>
   
   </div>           
     <table class="table table-striped">
       <thead>
         <tr>
           <th>Course Name</th>
           <th>Student Name</th>
           <th>Enrollment No,</th>
           <th>Branch</th>
           <th>Semester</th>
           <th>Email Id</th>
           <th>Mobile No,</th>
           <th>Passwprd</th>
           <th>Status</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
    {addManual && addManual.map((value) => {
     return( 
      <tr >
     
      <td>{value.course_name}</td>
                <td>{value.student_name}</td>
                <td>{value.enrolment_no}</td>
                <td>{value. branch}</td>
                <td>{value.semester}</td>
                <td>{value. email_id}</td>
                <td>{value. mobile_no}</td>
                <td>{value.password}</td>
                <td>{value.status}</td>
                <td><Link to={`/add-manual/${value._id}`}><button className="btn btn-success">Edit</button></Link>
                <button className="btn btn-danger" onClick={() =>handleDelete(value._id)}>Delete</button></td>
            </tr>

     )
          
})}
    </tbody>
       
   
     </table>
   </div>
  
  )
}

export default StudentList;