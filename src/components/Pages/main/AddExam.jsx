import React from 'react';
import axios from "axios";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../dashboard/Dashboard';
function AddExam(props) {
 
  const navigate =useNavigate();
  
  const [editId,setEditId]=useState(null)
  const [inputField , setInputField] = useState({
    course_name: '',
    exam_title: '',
    paper_id: '',
    exam_date_and_time: '',
    exam_duration: '',
    type_of_question:'',
    total_question:'',
})


useEffect(() => {
  console.log('props-',props);
  if(props && props.id){
    setEditId(props.id);
    console.log("editId",editId)
    axios.get("http://localhost:3001/AddExam?id="+props.id)
    .then((res)=>{
      let response=res.data.result[0];
      console.log("get axios",res.data.result)
     

      setInputField({
        course_name: response.course_name,
        exam_title: response.exam_title,
        paper_id: response.paper_id,
        exam_date_and_time: response.exam_date_and_time,
        exam_duration: response.exam_duration,
        type_of_question:response.type_of_question,
        total_question:response.total_question,
    })
    })
  }else{
    setEditId(null);
    console.log(editId);
  }
  
},[])
const inputsHandler = (e) =>{
  const { name, value } = e.target;
 setInputField((prevState) => ({
   ...prevState,
   [name]: value,
 }));
}
const submitButton = () =>{  
 
  
  const addExamData={
    course_name:inputField.course_name,
    exam_title:inputField.exam_title,
    paper_id:inputField.paper_id,
    exam_date_and_time:inputField.exam_date_and_time,
    exam_duration:inputField.exam_duration,
    type_of_question:inputField.type_of_question,
    total_question:inputField.total_question,
  }
  if(editId){
    window.location.reload(false);
    addExamData.id=editId;
    axios
  .post("http://localhost:3001/update-exam", { addExamData: addExamData })
  .then((res) => {
    if (res.data.result) {
      // console.log("data-->",res.data)
     alert(res.data.result);
     
      // toast()     
    }   
  })
  }else{
    
    axios
  .post("http://localhost:3001/AddExam", { addExamData: addExamData })
  .then((res) => {
    if (res.data.isSuccess) {
      // console.log("data-->",res.data)
    //  alert(res.data.Message)
      toast()
    }   
  })
  }
 
  navigate("/OnlineExamList")
  .catch((err) => console.log(err));
  
}
  return (
    <>
    <div className="container">
      <Dashboard/>
    <form >
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
      <label for="pwd" className="form-label">Exam Title</label>
      <input type="text" className="form-control" id="pwd" placeholder="Enter Exam Title" name="exam_title"  onChange={inputsHandler} value={inputField.exam_title} />
    </div>
    <div className="mb-3">
      <label for="pwd" className="form-label">Paper Id</label>
      <input type="number" className="form-control" id="pwd" placeholder="Enter Paper Id" name="paper_id"  onChange={inputsHandler} value={inputField.paper_id} />
    </div>
    <div className="mb-3">
      <label for="exam_date_and_time" className="form-label">Exam Date & Time</label>
      <input type="date" className="form-control" id="pwd" placeholder="Enter Date & Time" name="exam_date_and_time"  onChange={inputsHandler} value={inputField.exam_date_and_time} />
    </div>
    <div className="mb-3">
      <label for="exam_duration" className="form-label">Exam Duration</label>
      <select className="form-select" name='exam_duration'  onChange={inputsHandler} value={inputField.exam_duration} >
     <option value={"1 Hours"}>1 Hours</option>
     <option value={"2 Hours"}>2 Hours</option>
     <option value={"3 Hours"}>3 Hours</option>
     <option value={"4 Hours"}>4 Hours</option>
   </select>
    </div>
    <div className="mb-3">
      <label for="type_of_question" className="form-label">Type Of Question</label>
      <select className="form-select" name='type_of_question'  onChange={inputsHandler} value={inputField.type_of_question} >
     <option value={"MCQ"}>MCQ</option>
     <option value={"Short Questions"}>Short Questions</option>
     <option value={"Long Questions"}>Long Questions</option>
   </select>
    </div>
    <div className="mb-3">
      <label for="total_question" className="form-label">Total Question</label>
      <input type="number" className="form-control" id="pwd" placeholder="Enter Total Question" name="total_question"  onChange={inputsHandler} value={inputField.total_question} />
    </div>
    <div>
      
      
      {editId ? (
        
         <button type="submit" className="btn btn-primary" onClick={submitButton}>Update</button>
      ) : (
        <button type="submit" className="btn btn-primary" onClick={submitButton}>Submit</button>
      )}
    </div>
    <br />
   
  </form>
  </div>
  <ToastContainer />
  </>
  )
}

export default AddExam;