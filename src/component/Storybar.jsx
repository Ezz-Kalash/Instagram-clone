import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import boy from './assets/StoriesAvatars/driver.png';
import man from './assets/StoriesAvatars/farmer-avatar.png';
import nurse from './assets/StoriesAvatars/female-chef.png';
import assistant from './assets/StoriesAvatars/flight-attendant.png';
import singer from './assets/StoriesAvatars/graduated-student.png';
import steward from './assets/StoriesAvatars/saleswoman.png';

const stories = [
  { imageUrl: boy, name: 'Islam'},
  { imageUrl: man, name: 'Mohammad' },
  { imageUrl: nurse, name: 'Noor' },
  { imageUrl: assistant, name: 'Maha'},
  { imageUrl: singer, name: 'Mahmoud' },
  { imageUrl: steward, name: 'Bessan' },

];

const CircularFrame = ({ children }) => (
  <div
    style={{
      width: '6.2vw',
      height: '6.2vw',
      background: 'linear-gradient(45deg, #FFFF00, #ff5349, #FF33FF)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',}}>
    {children}
  </div>
);

const StoryBar = () => {
  return (
    <div className='Storybar'>
    <Box  sx={{ display: 'flex', overflowX: 'auto', p: 1, bgcolor: '#00000', borderBottom: '1px solid #d00dd' }}>
      {stories.map((story, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 2 }}>
          <CircularFrame>
            <Avatar
              sx={{ width: "5.7vw",height: "5.7vw",borderRadius: '50%',backgroundColor: 'black'}}
              alt={`Story ${index + 1}`}
              src={story.imageUrl}/>
          </CircularFrame>
          <Typography variant="body2" sx={{ color: 'white' }}>{story.name}</Typography>
        </Box>
      ))}
    </Box></div>)};
export default StoryBar;