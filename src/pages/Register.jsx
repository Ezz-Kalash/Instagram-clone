import React, { useState } from 'react';
import {  TextField, Button, Typography } from '@mui/material';
import regimg from "../component/assets/regester.png"
import instalogo from "../component/assets/instagram-logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function RegisterPage() {
  const navigate=useNavigate()
  const [error, setError] = useState(null); 
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://16.170.173.197/users/signup',userData)
    .then((response)=>{
      const token=response.data.token
      localStorage.setItem("token",token)
      navigate("/")
    })
    .catch((error) => {setError("the user already exiest.")});
  };
  
  return (
    <div className='regpage'>
       <img src={regimg} alt="" className="regimg"/>
      <div  className="regform">
      <img id="insta" src={instalogo} alt="instalogo" width={"100px"} />
      <Typography
      sx={{color:"gray",fontWeight:"100px"}}
      >Sign up to see photos and videos from your friends</Typography>

      <Button sx={{textTransform:'capitalize'}} variant="contained" color="secondary" startIcon={<FacebookIcon />}>
        Sign Up with Facebook
      </Button>

      <Link id="but" to="/">
        <Button sx={{marginTop:1}} type="submit" variant="contained" color="primary" size="small" >
          Login 
        </Button>
      </Link>
      <Divider sx={{width:"100%"}}>or</Divider>

      <form onSubmit={handleSubmit} >
        <TextField
        sx={{width:360,backgroundColor:'white',borderRadius:1,marginLeft:5}}
        label="UserName"
        name="userName"
          variant="filled"
          margin="normal"
          size="small"
          value={userData.userName}
          onChange={(e)=>{
            setUserData({...userData,userName:e.target.value})}}/>

        <TextField
        sx={{width:360,backgroundColor:'white',borderRadius:1,marginLeft:5}}
        label="Email"
        name="email"
          variant="filled"
          margin="normal"
          size="small"
          value={userData.email}
          onChange={(e)=>{
            setUserData({ ...userData, email: e.target.value })}} />

        <TextField
          fullWidth
          sx={{width:360,backgroundColor:'white',borderRadius:1,marginLeft:5}}
          label="Password"
          name="password"
            variant="filled"
            margin="normal"
            type="password"
            size="small"
          value={userData.password}
          onChange={(e)=>{
            setUserData({...userData,password:e.target.value})}}        />
                  {error && (<Typography sx={{ color: 'red',textAlign:"center" }}>{error}</Typography>)}

        <Button type="submit" variant="contained" color="secondary" size="large" sx={{ mt: 2,marginLeft:20 }}>
          Register
        </Button>
      </form>
      </div>
      </div>   )}
export default RegisterPage;