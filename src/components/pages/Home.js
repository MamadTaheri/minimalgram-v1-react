import React from 'react';
import Posts from '../post/Posts';

const Home = ({posts}) => {
    return (
        <div>
            <h1>All Posts</h1>
           <Posts posts={posts} /> 
        </div>
    );
};

export default Home;