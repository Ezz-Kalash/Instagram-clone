import React, { useState } from 'react';
import instalogo from "./assets/instagram-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCardIcon from '@mui/icons-material/AddCard';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import "./components.css";
import PostForm from "./PostForm"; 


function Leftbar({ onPost }) {

  const username=localStorage.getItem("username")
  const avatar=localStorage.getItem("avatar")
  const navegate=useNavigate()
  const [showPostForm, setShowPostForm] = useState(false);
  
  const handlePost = (newPost) => {
    onPost(newPost);
    setShowPostForm(false);
  };
  
const handleLogout = ()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('avatar')
  localStorage.removeItem('username')
  localStorage.removeItem('id')
  localStorage.removeItem('bio')
  navegate("/")
}

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClose = () => {setAnchorEl(null);};

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

  return (
    <div className='leftbar'>
      <img id="insta" src={instalogo} alt="instalogo" width={"100px"} />
      <Link id="but"  to="/home">
        <ListItemButton sx={{marginBottom:"1vw"}}>
          <HomeIcon fontSize='small' /><span className='leftbartext'> Home</span>
        </ListItemButton>
      </Link>

      <Link id="but" to="/prog">
        <ListItemButton sx={{marginBottom:"1vw"}}>
          <SearchIcon fontSize='small' /> <span className='leftbartext'>Search</span>
        </ListItemButton>
      </Link>

      <Link id="but" to="/exp">
        <ListItemButton sx={{marginBottom:"1vw"}}>
          <ExploreIcon fontSize='small' /><span className='leftbartext'> Explore</span>
        </ListItemButton>
      </Link>

      <Link id="but" to="/prog">
        <ListItemButton sx={{marginBottom:"1vw"}}>
        <SlideshowIcon fontSize='small' /><span className='leftbartext'> Reels
     </span> </ListItemButton>
      </Link>

      <Link id="but" to="/messeges">
        <ListItemButton sx={{marginBottom:"1vw"}}>
        <ChatIcon fontSize='small' /><span className='leftbartext'> Messages</span></ListItemButton>
      </Link>

      <Link id="but" to="/prog">
        <ListItemButton sx={{marginBottom:"1vw"}}>
        <FavoriteBorderIcon fontSize='small' /><span className='leftbartext'> Notification</span>
      </ListItemButton>
      </Link>

          <ListItemButton id="but" variant="contained" color="primary" onClick={() => setShowPostForm(!showPostForm)}>
          <AddCardIcon/>
          <span className='leftbartext'> Create Post</span>
          </ListItemButton>
      {showPostForm && (<PostForm onPost={handlePost} />)}

      <Link id="but" to="/prof">
        <ListItemButton id="proff">
          <Avatar sx={{width:"3vw",height:"3vw"}} src={avatar} />
          <Typography      sx={{fontSize:"1.vw",padding:2,color:"white"}}><span className='leftbartext'>{username}</span></Typography>        </ListItemButton>
          </Link>

          <ListItemButton 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            id="menu">
            <MenuIcon fontSize='small' /><span className='leftbartext'>  Menu</span>

        </ListItemButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{marginLeft:15}}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem sx={{color:"red"}} onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export default Leftbar;
