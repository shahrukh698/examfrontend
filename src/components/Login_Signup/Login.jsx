import React from "react";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import LSNavbar from "../header/LSNavbar";
import {useEffect} from 'react'

function Login() {
  useEffect(()=>{
    const auth = localStorage.getItem('token')
    if(auth){
      navigate('/add-exam')
    }
  })
 
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "23px auto",
  };
  const avatarStyle = { backgroundColor: "green" };
  const btnstyle = { margin: "8px 0px" };
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const LoginData = {
      email: values.email,
      password: values.password,
    };

    if (!values.email || !values.password) {
      setError(true);
      return false;
    }

    await axios
      .post("http://localhost:3001/login", { LoginData: LoginData })
      .then((res) => {
        console.log("data->", res.data);
        if (res.data.success) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          // console.log("res.data-->", res.data.data._id);
          // sessionStorage.setItem("id", res.data.data._id);
          alert(res.data.success);
          navigate("/add-exam");
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Grid>
      <LSNavbar/>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2> Login</h2>
          <Typography variant="caption" gutterBottom>
            Please Login with correct Email and Password
          </Typography>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
          sx={{ marginTop: "20px" }}
          fullWidth
          required
          type="email"
          value={values.email}
          onChange={handleChange}
          name="email"
        />
        {error && !values.email && (
          <span style={{ color: "red" }}>Enter valid Email</span>
        )}
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          sx={{ marginTop: "20px" }}
          fullWidth
          required
          value={values.password}
          onChange={handleChange}
          name="password"
        />
        {error && !values.password && (
          <span style={{ color: "red" }}>Enter valid Password</span>
        )}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
        </FormGroup>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={btnstyle}
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
        <Typography sx={{ textAlign: "right", margin: "5px 0px" }}>
          <a href="#" style={{ textDecoration: "none" }}>
            Forget password ?
          </a>
        </Typography>

        <Typography
          component="span"
          display="flex"
          justifyContent="center"
          margin="4px"
          alignItems="center"
          marginTop="10px"
        >
          <a href="https://www.facebook.com/">
            {" "}
            <FacebookOutlinedIcon sx={{ color: "blue", fontSize: "30px" }} />
          </a>
          <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <GoogleIcon
              sx={{ color: "red", margin: "3px", fontSize: "30px" }}
            />
          </a>
          <a href="https://www.linkedin.com/login">
            <LinkedInIcon sx={{ color: "blue", fontSize: "30px" }} />
          </a>
        </Typography>
        <Typography sx={{ margin: "" }}>
          <p>
            {" "}
            Do you have an account?
            <Link to="/signup" style={{ textDecoration: "none" }}>
              SignUp
            </Link>
          </p>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
