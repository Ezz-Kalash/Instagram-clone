import React, { useEffect, useState } from 'react';
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
import './Pagesstyle.css';
import Leftbar from '../component/Leftbar';

export default function Profile() {
  const username = localStorage.getItem('username')
  const [bio, setBio] = useState(localStorage.getItem('bio'));
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar'));
  const [myPosts, setMyPosts] = useState([]);

  const token = localStorage.getItem('token');

  const updateUserProfile = () => {
    const newavatar = prompt("please add the new the newavatar link");
    const newBio = prompt("please add the new the bio ");

    const updatedUserInfo = {
      avatar: newavatar !== null ? newavatar : avatar,
      bio: newBio !== null  ? newBio : bio,
    };

    localStorage.setItem("bio",newBio !==  "" ? newBio : bio)
    localStorage.setItem("avatar",newavatar !==  "" ? newavatar : avatar)

    axios.put('http://16.170.173.197/users', updatedUserInfo, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      setAvatar(updatedUserInfo.avatar);
      setBio(updatedUserInfo.bio);
      window.location.reload();
    })
    .catch((error) => {console.error('Error updating user profile:', error) });
};

  useEffect(() => {
    const yourUserId =localStorage.getItem("id")

    axios.get(`http://16.170.173.197/posts/${yourUserId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const myPostsData = response.data.posts || [];
        setMyPosts(myPostsData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [token]);

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
              <ImageList sx={{ width: "57vw", height: "31.4vw", marginLeft: "-9vw" }} cols={3} rowHeight={"10vw"}>
                
            { myPosts.slice().reverse().map((post, index) => (
            <div key={index} className="my-post">
                  <ImageListItem key={post.img} sx={{}}>
                    <img srcSet={post.image} src={post.image} alt={post.title} style={{height:"20vw"}} />
                  </ImageListItem>
                  <p className='desc'>{post.description}</p>
                  </div>))}

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
