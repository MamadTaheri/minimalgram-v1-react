import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="container">
      <ul className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
