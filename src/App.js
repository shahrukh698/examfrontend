import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Signup from "./components/Login_Signup/Signup";
import LSNavbar from "./components/header/LSNavbar";
import Login from "./components/Login_Signup/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Pages/dashboard/Dashboard"
import AddCourse from "./components/Pages/main/AddCourse";
import AddExam from "./components/Pages/main/AddExam";
import OnlineExamList from "./components/Pages/main/OnlineExamList";
import StudentList from "./components/Pages/main/StudentList";
import SendEmail from "./components/Pages/main/SendEmail";
import AddQuestions from "./components/Pages/main/AddQuestions";
import RegisteredCanditate from "./components/Pages/main/RegisteredCanditate";
import AddManual from "./components/Pages/main/AddManual";
import AddStudent from "./components/Pages/main/AddStudent"
import AddUpload from "./components/Pages/main/AddUpload";
import SelectedCandidate from "./components/Pages/main/SelectedCandidate";
import ProcterDashboard from "./components/Pages/main/SelectedCandidate";
import PrivateComponent from "./components/Login_Signup/PrivateComponent";
// import Admin from "./components/pages/Admin/Admin";
function App() {
  const navigate =useNavigate();
  const [editId,setEditId]=useState(null)
const handleEditProps=(id)=>{
  console.log("parentId",id);
  setEditId(id);
  navigate("/add-exam")
}
  return (
    <div className="App">
    
      {/* < Dashboard />  */}
     
     {/* <LSNavbar /> */}
      <Routes>
        
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        <Route element ={<PrivateComponent/>}>
        <Route path="/add-course" element={<AddCourse />} /> 
        {/* <Route path="/add-exam/:id" element={<AddExam />} /> */}
        <Route path="/add-exam" element={<AddExam id={editId}/>} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-student/add-manual" element={<AddManual  />} />
        <Route path="/add-upload" element={<AddUpload />} />
        <Route path="/selected-candidate" element={<SelectedCandidate />} />
        <Route path="/procter-dashboard" element={<ProcterDashboard />} />
        <Route path="/OnlineExamList" element={<OnlineExamList editChange={handleEditProps}/>} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/addquestions" element={<AddQuestions />} />
        {/* <Route path="/addquestions" element={<AddQuestions />} /> */}
        <Route path="/registeredcanditate" element={<RegisteredCanditate />} />
        </Route>

        {<Route path="/signup" element={<Signup />} /> }
        { <Route path="/login" element={<Login />} /> }
        
      </Routes>
    </div>
  );
}

export default App;
