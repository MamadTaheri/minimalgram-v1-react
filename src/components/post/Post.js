import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, toggleLike, forSinglePage }) => {
  return (
    <li  className="post">
      <h2>{post.title}</h2>
      <img src={forSinglePage ? `.${post.img}` :post.img} alt="post" />
      <div className="actions">
        <i
          className={`fa ${post.isLiked ? "fa-heart icon-red" : "fa-heart-o"}`}
          onClick={() => toggleLike(post.id)}
        ></i>
        {!forSinglePage && (
          <Link to={`/single-post/${post.id}`}>
            <i className="fa fa-comment-o"></i>
          </Link>
        )}
      </div>
      <p>{post.description}</p>
    </li>
  );
};

export default Post;
