import React, { useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import boy from './assets/StoriesAvatars/driver.png';
import man from './assets/StoriesAvatars/farmer-avatar.png';
import nurse from './assets/StoriesAvatars/female-chef.png';
import assistant from './assets/StoriesAvatars/flight-attendant.png';
import singer from './assets/StoriesAvatars/graduated-student.png';
import steward from './assets/StoriesAvatars/saleswoman.png';
import explorePic1 from "../component/assets/ExplorePics/explorePic1.avif"
import explorePic2 from "../component/assets/ExplorePics/explorePic2.avif"
import explorePic3 from "../component/assets/ExplorePics/explorePic3.avif"
import explorePic4 from "../component/assets/ExplorePics/explorePic4.avif"
import explorePic5 from "../component/assets/ExplorePics/explorePic5.avif"
import explorePic6 from "../component/assets/ExplorePics/explorePic6.avif"

const stories = [
  { imageUrl: boy, name: 'Islam',storyImg : explorePic1 },
  { imageUrl: man, name: 'Mohammad',storyImg :explorePic2 },
  { imageUrl: nurse, name: 'Noor',storyImg :explorePic3 },
  { imageUrl: assistant, name: 'Maha',storyImg :explorePic4 },
  { imageUrl: singer, name: 'Mahmoud',storyImg :explorePic5 },
  { imageUrl: steward, name: 'Bessan',storyImg :explorePic6 },
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
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

const StoryBar = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleClose = () => {
    setSelectedStory(null);
  };

  return (
    <div className='Storybar'>
      <Box
        sx={{ display: 'flex', overflowX: 'auto', p: 1, bgcolor: '#00000',zIndex:999, borderBottom: '1px solid #d00dd' }}
      >
        {stories.map((story, index) => (
          <Box
            key={index}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 2 }}
          >
            <div onClick={() => handleStoryClick(story)}>
              <CircularFrame>
                <Avatar
                  sx={{ width: '5.7vw', height: '5.7vw', borderRadius: '50%', backgroundColor: 'black' }}
                  alt={`Story ${index + 1}`}
                  src={story.imageUrl}
                />
              </CircularFrame>
            </div>
            <Typography variant="body2" sx={{ color: 'white' }}>
              {story.name}
            </Typography>
          </Box>
        ))}
      </Box>
      {selectedStory && (
        <div className="real-story-modal" onClick={handleClose}>
          <img className="storyimg" src={selectedStory.storyImg} alt={`Real Story: ${selectedStory.name}`}  />
        </div>
      )}
    </div>
  );
};

export default StoryBar;
