import React from "react";
import Post from "../post/Post";

import data from "../../data";

import { useParams } from "react-router-dom";
import Comments from "../comment/Comments";

const SinglePost = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="single-post">
        <Post post={data[id]} />
        <Comments comments={data[id].comments}/>
      </div>
    </div>
  );
};

export default SinglePost;
