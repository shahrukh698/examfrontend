import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LSNavbar from "../header/LSNavbar";


import { useState } from "react";
import { useEffect } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Signup = () => {
  
 
  const navigate = useNavigate();
  const paperStyle = { padding: "30px 20px", width: 400, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "green" };

  const [password, setPassword] = useState("")
	const [cpassword, setCpassword] = useState("")
  const [passValue , setPassValue] = useState("")
  const [perror, setPerror] = useState("")

  useEffect(()=>{
    const auth = localStorage.getItem('token')
    if(auth){
      navigate('/add-exam')
    }
  })
   const handlePasswordChange = (name) => (e) => {
    let item = e.target.value
    setPassValue(item)
    if(item.length <8){
      setPassword(true)
    }else {
      setPassword(false)
    }
    setValues({ ...values, [name]: e.target.value });

   }

   const handleCpassword = (name) => (e) => {
    setCpassword(e.target.value)
    if(passValue!==e.target.value) {
      setPerror(true);
    }else {
      setPerror(false);
    }
    setValues({ ...values, [name]: e.target.value });
   }
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    cpassword:"",
    showPassword: false,
  });

  const [error, setError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = values;
    const user = { username, email, password,cpassword };
    console.warn(!username);
    if (!username || !email || !password) {
      setError(true);
      return false;
    } else if (perror==true){
      alert("Password Does not match")
      return false
    }

    await axios.post("http://localhost:3001/signup", user).then((res) => {
      console.log(res.data);
      if (res.data) {
        alert("Successfully Registered");
      }
    });
    navigate("/login").catch((err) => console.log(err));
  };
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  return (
   
    <Grid>
      <LSNavbar/>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            placeholder="Enter  username"
            value={values.username}
            onChange={handleChange("username")}
          />
          {error && !values.username && (
            <span style={{ color: "red" }}>Enter Valid Username</span>
          )}
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            sx={{ margin: "5px 0px" }}
            value={values.email}
            onChange={handleChange("email")}
          />
          {error && !values.email && (
            <span style={{ color: "red" }}>Enter Valid email</span>
          )}
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            sx={{ marginBottom:"5px" }}
            value={values.password}
            onChange={handlePasswordChange("password")}
          />
          {error && !values.password && (
            <span style={{ color: "red" }}>Enter Valid password</span>
          )}
          {password ? (
            <p style={{color : "red" , float: "left"}}>Password Must be 8 Character{""}</p>
          ) : (
            ""
          )} 
           <TextField
            fullWidth
            label="Confirm Password"
            name="cpassword"
            type="password"
            value={values.cpassword}
            onChange={handleCpassword("cpassword")}
          />
           {perror ? (
            <p style={{color : "red" , float: "left"}}>Password does not match{""}</p>
          ) : (
            ""
          )}
          <br /><br />
          
          <div>
            <input type="checkbox" /> I accept the terms and conditions
          </div>
          

          <Typography>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ margin: "10px 0px" }}
            >
              Sign Up
            </Button>
          </Typography>
          <Typography sx={{ margin: "10px 0px" }}>
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            <a href="https://www.facebook.com/">
              <FacebookOutlinedIcon sx={{ color: "blue", fontSize: "30px" }} />
            </a>
            <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <GoogleIcon
              sx={{ margin: "3px", color: "red", fontSize: "30px" }}
            />
            </a>
            <a href="https://www.linkedin.com/login">
            <LinkedInIcon sx={{ color: "blue", fontSize: "30px" }} />
            </a>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
