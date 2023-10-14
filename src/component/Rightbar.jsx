import * as React from 'react';
import List from '@mui/material/List';
import { Link } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import "./components.css"
import man from './assets/Avatars/man.png';
import nurse from './assets/Avatars/nurse.png';
import assistant from './assets/Avatars/shop-assistant.png';
import singer from './assets/Avatars/singer.png';
import steward from './assets/Avatars/steward.png';
import { ListItemButton } from '@mui/material';

export default function Rightbar() {
  const username=localStorage.getItem("username")
  const avatar=localStorage.getItem("avatar")

  return (
    <div    className='rightbar'    >
    <List >
    <Link id="but" to="/prof">
      <ListItemButton>
          <Avatar src={avatar}/>
          <ListItemText  primary={<b>{username}</b>}  />
      </ListItemButton>
      </Link>

      <ListItem>
      <ListItemText  secondary={<span style={{ color: 'white',fontSize:"1.2vw" }}>Suggestion for you </span>} />
        <p id="see">See more</p>

      </ListItem>
      <ListItem>
          <Avatar src={nurse}/>
          <ListItemText primary="Batool" secondary={<span style={{ color: 'white',fontSize:"1vw" }}>Batool Dawood</span>} />
         <p className='follow'>Follow</p>

      </ListItem>      <ListItem>
          <Avatar src={man}/>
          <ListItemText primary="Mahmaoud" secondary={<span style={{ color: 'white' ,fontSize:"1vw"}}>Mahmoud abuhigleh</span>} />
         <p className='follow'>Follow</p>

      </ListItem>
            <ListItem>
          <Avatar src={singer}/>
          <ListItemText primary="Noor" secondary={<span style={{ color: 'white',fontSize:"1vw" }}>Noor Adawi</span>} />
         <p className='follow'>Follow</p>

      </ListItem>
      <ListItem>
          <Avatar src={assistant}/>
          <ListItemText primary="Besan" secondary={<span style={{ color: 'white' ,fontSize:"1vw"}}>Bessan arda</span>} />
         <p className='follow'>Follow</p>

      </ListItem>
          <ListItem>
          <Avatar src={steward}/>
          <ListItemText primary="Abdalrahman" secondary={<span style={{ color: 'white' ,fontSize:"1vw"}}>Abdalrahman Abu aljood</span>} />
         <p className='follow'>Follow</p>

      </ListItem>
        <h4 className='aa'>About.Help.Press.API.Jobs.Privacy.Terms.Location.Language.Meta Verifed</h4> 
    </List>
    </div>
  );
}