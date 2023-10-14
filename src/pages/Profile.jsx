import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import explorePic1 from "../component/assets/ExplorePics/explorePic1.avif"
import explorePic2 from "../component/assets/ExplorePics/explorePic2.avif"
import explorePic4 from "../component/assets/ExplorePics/explorePic4.avif"
import explorePic5 from "../component/assets/ExplorePics/explorePic5.avif"
import explorePic6 from "../component/assets/ExplorePics/explorePic6.avif"
import './Pagesstyle.css';
import Leftbar from '../component/Leftbar';

export default function Profile() {
  const username = localStorage.getItem('username')
  const [bio, setBio] = useState(localStorage.getItem('bio'));
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar'));

  const token = localStorage.getItem('token');

  const updateUserProfile = () => {
    const newavatar = prompt("please add the new the newavatar link");
    const newBio = prompt("please add the new the bio ");

    const updatedUserInfo = {
      avatar: newavatar !== null  ? newavatar : avatar,
      bio: newBio !== null ? newBio : bio,
    };

    localStorage.setItem("bio",newBio !==  "" ? newBio : bio)
    localStorage.setItem("avatar",newavatar !==  "" ? newavatar : avatar)



    axios.put('http://16.170.173.197/users', updatedUserInfo, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      setAvatar(updatedUserInfo.avatar);
      setBio(updatedUserInfo.bio);
      window.location.reload();
    })
    .catch((error) => {console.error('Error updating user profile:', error) });
};

  const itemData = [
    {
      img: explorePic1,
      title: 'random img',
    },
    {
      img: explorePic2,
      title: 'random img',
    },
    {
      img: explorePic4,
      title: 'random img',
    },
    {
      img: explorePic5,
      title: 'random img',
    },
    {
      img: explorePic6,
      title: 'random img',
    },
  ];

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="profile">
      <Leftbar></Leftbar>
      <div id="top">
        <Avatar id="img" sx={{ width: "11vw", height: "11vw" }} src={avatar} />

        <h2 id="name">{username}</h2>
        <Button id="butt" variant="contained" onClick={updateUserProfile}>
          Edit Profile
        </Button>
        <Button id="butt" variant="contained">
          View actions
        </Button>

        <div id="stats">
          <p id="p">5 Posts</p>
          <p id="p">211 followers</p>
          <p id="p">300 Following</p>
        </div>
        <div id="bio">
          <p id="p">{bio}</p>
        </div>
      </div>
      <div className="profile_posts">
        <Box sx={{ width: '100%' ,height:"100%"}}>
          <TabContext value={value}>
            <TabList onChange={handleChange}>
              <Tab value="1" label="Posts" sx={{ color: 'white', paddingRight: "5vw", paddingLeft: "5vw" }} />
              <Tab value="2" label="Reels" sx={{ color: 'white', paddingRight: "5vw", paddingLeft: "5vw" }} />
              <Tab value="3" label="Tagged" sx={{ color: 'white', paddingRight: "5vw", paddingLeft: "5vw" }} />
            </TabList>
            <TabPanel value="1">
              <ImageList sx={{ width: "57vw", height: "31.4vw", marginLeft: "-9vw" }} cols={3} rowHeight={"30vw"}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img} sx={{ marginLeft: "1vw", marginBottom: "1vw" }}>
                    <img srcSet={item.img} src={item.img} alt={item.title} />
                  </ImageListItem>
                ))}
              </ImageList>
            </TabPanel>
            <TabPanel value="2">
              <div className="prog">
                <br />
                <p>There are no reels</p>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="prog">
                <br />
                <p>There are no tagged posts</p>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
