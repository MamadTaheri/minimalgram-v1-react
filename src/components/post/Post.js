import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <li className="post">
      <h2>{post.title}</h2>
      <img src={post.img} alt="post" />
      <div className="actions">
        <i className={`fa ${post.isLiked ? "fa-heart icon-red" : "fa-heart-o"}`}></i>
        <Link to={`/single-post/${post.id}`}>
          <i className="fa fa-comment-o"></i>
        </Link>
      </div>
      <p>{post.description}</p>
    </li>
  );
};

export default Post;
