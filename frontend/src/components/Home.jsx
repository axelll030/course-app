import axios from "axios";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return postList.map((post, index) => {
    return (
      <div key={index} className="post">
        <div className="post-title">{post.title}</div>
        <div className="post-body">{post.postText}</div>
        <div className="post-username">{post.userName}</div>
      </div>
    );
  });
};
