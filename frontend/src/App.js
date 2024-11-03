import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <div className="App">
      {postList.map((post, index) => {
        return (
          <div key={index} className="post">
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.postText}</div>
            <div className="post-username">{post.userName}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
