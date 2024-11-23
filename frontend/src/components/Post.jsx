import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then(({ data }) => {
      if (data) {
        setPost(data);
      }
    });
  }, [id]);
  return (
    <div className="postPage">
      {post ? (
        <div className="leftSide">
          <div className="post" id="individual">
            <div className="title">{post.title}</div>
            <div className="body">{post.postText}</div>
            <div className="footer">{post.userName}</div>
          </div>
        </div>
      ) : (
        <p>No data</p>
      )}
      <div className="rightSide">Comment Section</div>
    </div>
  );
};
