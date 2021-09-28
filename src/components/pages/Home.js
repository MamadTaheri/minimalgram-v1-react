import React from 'react';
import Posts from '../post/Posts';

const Home = ({ posts, toggleLike}) => {
    return (
        <div>
            <h1>All Posts</h1>
           <Posts posts={posts} toggleLike={toggleLike} /> 
        </div>
    );
};

export default Home;