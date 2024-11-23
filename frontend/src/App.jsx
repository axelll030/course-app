import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { CreatePost } from "./components/CreatePost";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="createpost">Create a Post</Link>
          <Link to="/">Home</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
