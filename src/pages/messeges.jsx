import React from 'react';
import { Avatar, Typography, List, ListItem, ListItemText } from '@mui/material';
import man from '../component/assets/Avatars/man.png';
import nurse from '../component/assets/Avatars/nurse.png';
import assistant from '../component/assets/Avatars/shop-assistant.png';
import messenger from '../component/assets/messengar-logo.png';
import Button from '@mui/material/Button';
import singer from '../component/assets/Avatars/singer.png';
import steward from '../component/assets/Avatars/steward.png';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Leftbar from '../component/Leftbar';



const MessagesPage = () => {
  const users = [
    {
      name: 'User 1',
      avatar: man,
      message: 'sdfsdf',
    },
    {
      name: 'User 2',
      avatar: nurse,
      message: 'sdfdsaadf',
    },
    {
      name: 'User 3',
      avatar: assistant,
      message: 'random text',
    },
    {
      name: 'User 4',
      avatar: singer,
      message: 'Good morning',
    },
    {
      name: 'User 5',
      avatar: steward,
      message: 'hello',
    },
  ];

  return (
    <div className="messages-page">
      <Leftbar></Leftbar>
      <div className="messages-list">
        <div className='namee'>
        <Typography variant="h6">Ezz_Kalash</Typography>
        <EditOutlinedIcon className='editicon'></EditOutlinedIcon>
        </div>
        <div className='meseges-req'>
        <Typography variant="h8">Messages</Typography>
        <Typography variant="h8" sx={{marginLeft :15}}>Request</Typography>
        </div>

        <List>
          {users.map((user, index) => (
            <ListItem button key={index}>
              <Avatar src={user.avatar} alt={user.name} />
              <ListItemText sx={{color:"primary"}}
                primary={user.name}
                secondary={<span style={{ color: 'white' }}>{user.message}</span>}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="messenger-logo">
        <img src={messenger} alt="Messenger Logo" />
        <Typography variant="h3" sx={{marginLeft:-13,    padding:2}}>Your Messages</Typography>
        <Typography variant="h6" sx={{marginLeft:-23,    padding:2}}>Send private photos and messages to a friend or group</Typography>
        <Button variant="contained" color="secondary">SEND MESSAGES</Button>
      </div>
    </div>
  );
};

export default MessagesPage;
