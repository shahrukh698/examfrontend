import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
export default function LSNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Online Exam
          </Typography>
          <Button color="inherit">
          <Link to="/login" style={{color:"white",textDecoration:"none"}}>Login</Link>  
            
            </Button>
          <Button color="inherit">
          <Link to="/signup" style={{color:"white",textDecoration:"none"}}>Sign Up</Link>  
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
