import Header from "./components/UI/Header";
import data from "./data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import SinglePost from "./components/pages/SinglePost";
import { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState(data)

  const toggleLike = (id) => {
    const updatedPosts = [...posts];
    updatedPosts[id].isLiked = !updatedPosts[id].isLiked;
    setPosts(updatedPosts); 
  }

  const addComment = (id, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[id].comments.push(comment);
    setPosts(updatedPosts);
  }

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home posts={posts} toggleLike={toggleLike} />
          </Route>
          <Route path="/single-post/:id">
            <SinglePost addComment={addComment} toggleLike={toggleLike} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
