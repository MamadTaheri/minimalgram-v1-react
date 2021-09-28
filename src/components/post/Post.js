import React from 'react';

const Post = ({post}) => {
    return (
        <li className="post">
            <h2>{post.title}</h2>
            <img src={post.img} alt="post" />
            <div className="actions">
               <i className={`fa ${post.isLiked ? 'fa-heart icon-red' : 'fa-heart-o'}`}></i>
               <i className="fa fa-comment-o"></i>
            </div>
            <p>{post.description}</p> 
        </li>
    );
};

export default Post;