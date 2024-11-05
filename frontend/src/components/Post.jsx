import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((response) => {});
  }, [id]);
  return <div>{id}</div>;
};
