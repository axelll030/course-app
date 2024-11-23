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
        <div className="title">{post.title}</div>
        <div className="body">{post.postText}</div>
        <div className="footer">{post.userName}</div>
      </div>
    );
  });
};
