import React from 'react'
import { Routes, Route } from "react-router-dom";
import PrivateComponent from '../../Login_Signup/PrivateComponent';
import Dashboard from './Dashboard';
import AddExam from '../main/AddExam';
import AddStudent from '../main/AddStudent';
import AddUpload from '../main/AddUpload';
import AddManual from '../main/AddManual';
import AddQuestions from '../main/AddQuestions';
import SelectedCandidate from '../main/SelectedCandidate';
import StudentList from '../main/StudentList';
import OnlineExamList from '../main/OnlineExamList';
import SendEmail from '../main/SendEmail';
import ProcterDashboard from '../main/ProcterDashboard';
import RegisteredCanditate from '../main/RegisteredCanditate';

function Dashb() {
  return (
    <div className="app">
        <Dashboard/>
    <Routes>
         <Route element={<PrivateComponent/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      
        <Route path="/add-exam/:id" element={<AddExam />} />
        <Route path="/add-exam" element={<AddExam />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-student/add-manual" element={<AddManual />} />
        <Route path="/add-upload" element={<AddUpload />} />
        <Route path="/selected-candidate" element={<SelectedCandidate />} />
        <Route path="/procter-dashboard" element={<ProcterDashboard />} />
        <Route path="/OnlineExamList" element={<OnlineExamList />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/addquestions" element={<AddQuestions />} />
        {/* <Route path="/addquestions" element={<AddQuestions />} /> */}
        <Route path="/registeredcanditate" element={<RegisteredCanditate />} />
        </Route>
    </Routes>
    </div>
  )
}

export default Dashb;