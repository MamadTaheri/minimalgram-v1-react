import React from "react";

const Comment = ({comment}) => {
  return (
    <div className="comment">
      <h4>{comment.user}</h4>
      <p>{comment.msg}</p>
    </div>
  );
};

export default Comment;
