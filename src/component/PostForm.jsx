import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

const token = localStorage.getItem("token");

function PostForm({ onPost }) {
  
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);

    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    })
      .then((response) => {
        onPost(response.data);
      })
      .catch((error) => {
        console.error("Error posting the data:", error);
      });
  };

  const handleFileUpload = (input) => {
    const file = input.files[0];
    setImage(file);
  };

  return (
    <div className="post-form">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="input"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input id="input" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
          <br />
          <input type="file" id="imageUpload" name="imageUpload" accept="image/*"
          onChange={(e) => handleFileUpload(e.target)}/>
        </div>
        <Button type="submit" variant="contained" color="secondary" sx={{ marginTop: 4 }}>
          Post
        </Button>
      </form>
    </div>
  );
}
export default PostForm;