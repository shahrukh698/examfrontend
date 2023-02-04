import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';
function OnlineExamList(props) {
  const navigate =useNavigate()
  const [addExam , setAddExam] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:3001/AddExam')
        .then(response => setAddExam(response.data.result));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
   // Delete request using axios inside useEffect React hook
   const { id } = useParams();
   const handleEdit = async (id) => {
    console.log(id);
    props.editChange(id);
   }
    const handleDelete = async (id) => {
    window.location.reload(false);
    console.log("id", id);
    await axios
      .post("http://localhost:3001/delete-AddExam", { id: id })
      .then((res) => {
        if (res.data.isSuccess) {
          // toast(res.data.success);
          // alert(res.data.success)
          <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">Delete SuccessFully</Alert>
    </Stack>
        } else {   
          // toast(res.data.success);
        }
      });
  };

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
  <table class="table table-striped text-center">
    <thead>
      <tr>
      <th>Course Name </th>
        <th>Exam Title</th>
        <th>Paper Id</th>
        <th>Date & Time</th>
        <th>Duration</th>
        <th>Question Type</th>
        <th>Total Question</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {addExam && addExam.map((value) => {
     return <tr >
      <td>{value.course_name}</td>
                <td>{value.exam_title}</td>
                <td>{value.paper_id}</td>
                <td>{value.exam_date_and_time}</td>
                <td>{value. exam_duration}</td>
                <td>{value.type_of_question}</td>
                <td>{value. total_question}</td>
                <td>{value.status}</td>
                <td><button className="btn btn-success " onClick={() => handleEdit(value._id)}>Edit</button>
                <button className="btn btn-danger ms-2" onClick={() => handleDelete(value._id)}>Delete</button></td>
            </tr>
})}
    </tbody>
  </table>
</div>
  )
}

export default OnlineExamList;