import React from "react";
import Post from "./Post";

const Posts = ({ posts, toggleLike }) => {
  return (
    <div className="container">
      <ul className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} toggleLike={toggleLike} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
