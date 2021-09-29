import React from "react";
import Comment from "./Comment"; 

const Comments = ({ comments}) => {
  return (
    <div className="comments">
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}

    
    </div>
  );
};

export default Comments;
