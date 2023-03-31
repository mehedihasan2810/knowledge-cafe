import React from "react";
import "./Blog.scss";
const Blog = () => {
  return (
    <article className="blog-container">
      <img className='img-cover' src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      <div className='blog-body'>
        <div className='author-info-container'>
          <div className='author-info'>
          <img className='img-author' src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
          <div>
            <h4 className='author-name'>
              mehedi hasan
            </h4>
            <p>mar 14 2 days ago</p>
          </div>
          </div>
          <div>
            <p>05 min read</p>
            <button>bookmark</button>
          </div>
        </div>
        <h2 className='heading2'>How to get your first job as a self-taught programmer</h2>
        <p className='tags'>#beginners #programming</p>
        <button>Marked as read</button>
      </div>
    </article>
  );
};

export default Blog;
