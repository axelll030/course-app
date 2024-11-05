import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return postList.map((post, index) => {
    return (
      <div
        key={index}
        className="post"
        onClick={() => {
          navigate(`/post/${post.id}`);
        }}
      >
        <div className="post-title">{post.title}</div>
        <div className="post-body">{post.postText}</div>
        <div className="post-username">{post.userName}</div>
      </div>
    );
  });
};
