import React from "react";
import Post from "../post/Post";

import data from "../../data";

import { useParams } from "react-router-dom";
import Comments from "../comment/Comments";
import AddCommentForm from "../comment/AddCommentForm";

const SinglePost = ({ addComment }) => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="single-post">
        <Post post={data[id]} />
        <div className="comments-wrapper">
          <Comments comments={data[id].comments} />
          <AddCommentForm addComment={addComment} id={id} />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
