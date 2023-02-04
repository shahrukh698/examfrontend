import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCardIcon from '@mui/icons-material/AddCard';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'; import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useNavigate} from 'react-router-dom'
function Leftside() {

  let user= JSON.parse(localStorage.getItem('token'))
  const navigate = useNavigate();
  function logOut(){
    localStorage.clear();
    navigate('/login');

  }

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"

    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddCardIcon />
        </ListItemIcon>
        <Link to="/add-course" >
        <ListItemText primary="Add Course"  />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BookmarkAddedIcon />
        </ListItemIcon>
        <Link to="/add-exam" id={null}>
        <ListItemText primary="Add Exam"  />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BookmarkAddedIcon />
        </ListItemIcon>
        <Link to="/OnlineExamList">
        <ListItemText primary="Online exam List" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <Link to="/add-student">
        <ListItemText primary="Add Student" />
        </Link>
      </ListItemButton>
      
      <ListItemButton>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <Link to="/student-list">
        <ListItemText primary="Student List" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <Link to="/addquestions">
        <ListItemText primary="Add Question" />
        </Link>
         </ListItemButton> 
       <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <Link to="/send-email">
        <ListItemText primary="Send Email" />
        </Link>
      </ListItemButton> 
  
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Proctor Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary=" View Questions" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="MCQ" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Short Questions" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Long Questions" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <LogoutOutlinedIcon />
        </ListItemIcon>
        <ListItemText onClick={logOut} primary="Logout" />
      </ListItemButton>
    </List>
  )
}

export default Leftside