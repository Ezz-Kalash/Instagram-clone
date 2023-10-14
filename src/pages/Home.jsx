import React, { useEffect, useState } from 'react';
import {Card,CardContent,Avatar,Typography,IconButton} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Pagesstyle.css';
import StoryBar from '../component/Storybar';
import Rightbar from '../component/Rightbar';
import Leftbar from '../component/Leftbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import axios from 'axios';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Home = () => {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [likes, setLikes] = useState([]);
  
  useEffect(() => {
    axios.get("http://16.170.173.197/posts", {
      headers: {Authorization: `Bearer ${token}`},
    })
      .then((response) => {
        const receivedPosts = response.data.posts || [];
        setPosts(receivedPosts);
        setLikes(new Array(receivedPosts.length).fill(false));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [token]);

  const handleDelete = (postId) => {
    axios.request({
        method: "delete",
        url: `http://16.170.173.197/posts/${postId}`,
        data: {
          id: postId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const updatedPosts = posts.filter((post) => {
          return post.id !== postId;
        });
        setPosts(updatedPosts);
      })
      .catch((error) => {console.error("Error deleting post:", error);});
  };

  const handleEdit = (postId) => {
    const newDiscraption = prompt("please add the new the description");

    axios.request({
        method: "put",
        url: `http://16.170.173.197/posts/${postId}`,
        data: {description: newDiscraption},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => { window.location.reload();})
      .catch((error) => {console.error("Error deleting post:", error);});
  };

  
  const handlePost = (newPost) => {
    setPosts([newPost, ...posts]);
    window.location.reload();
  };

  const toggleLikePost = (postId, isLiked) => {
    if (isLiked) {unlikePost(postId)}
     else {likePost(postId);}
  };

  const likePost = (postId, index) => {
    axios.post(`http://16.170.173.197/posts/like/${postId}`, {}, {
        headers: {Authorization: `Bearer ${token}`},
      })

      .then((response) => {
        const updatedPosts = [...posts];
        updatedPosts[index] = response.data.post;
        setPosts(updatedPosts);
        window.location.reload();
      })
      .catch((error) => {console.error('Error liking post:', error);});
  };
  
  const unlikePost = (postId) => {
    axios.delete(`http://16.170.173.197/posts/like/${postId}`, {
      headers: {Authorization: `Bearer ${token}`},
    })
      .then((response) => {
        const updatedLikes = likes.filter((likeId) => likeId !== postId);
        setLikes(updatedLikes);
      })
      .catch((error) => {console.error('Error unliking post:', error)});
  };

  const isLiked = (postId) => {return likes.includes(postId);};
    
  return (

    <div className="dd">
      <StoryBar />
      <Rightbar />
      <Leftbar onPost={handlePost} />
      {loading ? (
      <Stack spacing={2} className="post" >
        <Skeleton variant="circular"  width={50} height={50} sx={{backgroundColor:"gray"}} />
        <Skeleton variant="rectangular" width={"40vw"} height={"40vw"}sx={{backgroundColor:"gray"}}  />
        <Skeleton variant="rounded" width={"40vw"} height={40} />
        <Skeleton variant="circular"  width={50} height={50} sx={{backgroundColor:"gray"}} />
        <Skeleton variant="rectangular" width={"40vw"} height={"40vw"}sx={{backgroundColor:"gray"}}  />
        <Skeleton variant="rounded" width={"40vw"} height={40} />
      </Stack>        
        ) : (
      posts.slice().reverse().map((post, index) => (

        <Card key={index} className="post" sx={{ color: 'white', backgroundColor: 'black' }}>

            <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
              <IconButton color='primary' {...bindTrigger(popupState)}sx={{marginLeft:"35vw",marginBottom:"-3vw"}}>
              <MoreHorizIcon/>
            </IconButton>

          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={()=>handleDelete(post.id)} sx={{color:"red"}}>Delete Post</MenuItem>
            <MenuItem onClick={()=>handleEdit(post.id)} sx={{color:"blue"}}>Edit Post</MenuItem>
          </Menu>

        </React.Fragment>
      )}
    </PopupState>
          <div className="post__content">
            <div className="post__user-info">
              <Avatar
                className="post__avatar" alt={post.title} src={post.user ? post.user.avatar : 'Unknown avatar'}/>
              <div className="post__username">
              <Typography variant="subtitle2">{post.user ? post.user.userName : 'Unknown User'}</Typography>
              </div>
            </div>
            <img className="post__image" src={post.image} alt={post.description}/>
          </div>
          <CardContent>
            <div className="post__buttons">
            <IconButton color="primary"onClick={() => toggleLikePost(post.id, isLiked(post.id))}>
            <FavoriteBorderOutlinedIcon fontSize='medium' />
            </IconButton>

              <IconButton color="primary">
                <ChatBubbleOutlineIcon  fontSize='medium'/>
              </IconButton>
              <IconButton color="primary">
                <SendIcon  fontSize='medium'/>
              </IconButton>
              <IconButton color="primary" sx={{marginLeft:"29vw"}} className="post__save-icon">
                <BookmarkBorderOutlinedIcon fontSize='medium' />
              </IconButton>
            </div>
            <Typography variant="body2">{post.likes ? `${post.likes.length} likes` : '0 likes'}</Typography>
            <Typography variant="body2" sx={{display:"flex"}}>
              <strong>{post.user ? post.user.userName : 'Unknown User'}</strong> <span style={{ marginLeft: "1vw",width:"30vw" }}> {post.description}</span> 
            </Typography>
          </CardContent>
        </Card>
      ))
      )}
    </div>
  );}
export default Home;