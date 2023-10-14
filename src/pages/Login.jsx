import React, { useState } from 'react';
import {  TextField, Button, Typography } from '@mui/material';
import regimg from "../component/assets/regester.png"
import instalogo from "../component/assets/instagram-logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginPage() {

    const navigate=useNavigate()
    const [error, setError] = useState(null); 
    const [userData, setUserData] = useState({
      email: "",
      password: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://16.170.173.197/users/login',userData)
      .then((response)=>{
        const token=response.data.token
        const username=response.data.user.userName
        const id=response.data.user.id
        const avatar=response.data.user.avatar
        const bio=response.data.user.bio

        localStorage.setItem("username",username)
        localStorage.setItem("avatar",avatar)
        localStorage.setItem("token",token)
        localStorage.setItem("id",id)
        localStorage.setItem("bio",bio)

        navigate("/home")
      })
      .catch((error) => {
        setError("Invalid email or password.");});
    };

  return (
    <>
    <div className='regpage'>
       <img src={regimg} alt="" className="regimg"/>

      <form onSubmit={handleSubmit} className="regform">
      <img id="insta" src={instalogo} alt="instalogo" width={"140vw"} />

        <TextField
        sx={{width:"27vw",backgroundColor:'white',borderRadius:1}}
        label="Email"
        name="email"
          variant="filled"
          margin="normal"
          size="small"
          value={userData.email}
          onChange={(e)=>{
            setUserData({...userData,email:e.target.value})}}
        />

        <TextField
          sx={{width:"27vw",backgroundColor:'white',borderRadius:1}}
          label="Password"
          name="password"
            variant="filled"
            margin="normal"
            type="password"
            size="small"
            value={userData.password}
            onChange={(e)=>{
              setUserData({...userData,password:e.target.value})}}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 1 ,width:"8vw"}}
        >
          Login
        </Button>
        <Divider sx={{width:"100%",color:"primary"}}>or</Divider>
        <Link id="but" to="/register">

        <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        sx={{width:"8vw"}}
      >
        Register 
      </Button></Link>

      <Button
      sx={{textTransform:'capitalize',width:"20vw"}}
        variant="contained"
        color="secondary"
        startIcon={<FacebookIcon />
      }
      >
        Sign Up with Facebook
      </Button>
      <Typography      sx={{textTransform:'capitalize',color:"gray"}}>Forget Password ?</Typography>

      {error && (<Typography sx={{ color: 'red' }}>{error}</Typography>)}

      </form>
      </div>
            <p className='footer'></p>
</>)
}
export default LoginPage;