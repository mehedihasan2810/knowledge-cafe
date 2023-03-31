import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Blog from "../Blog/Blog";
const Blogs = () => {
const [blogs, setBlogs] = useState([])


  useEffect(() => {
    const abortController = new AbortController();
    fetch("src/fakeData/blogs.json", {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => setBlogs(data));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="blogs-container">
      {
        blogs.map((blog) => (
          <Blog key={blog.id} {...blog} />
        ))
      }
    </div>
  );
};

export default Blogs;
