import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Blog from "../Blog/Blog";
import BookmarkedBlogs from "../BookmarkedBlogs/BookmarkedBlogs";
import TimeSpent from "../TimeSpent/TimeSpent";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

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
    <main>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
      <aside>
        <TimeSpent />
        <BookmarkedBlogs />
      </aside>
    </main>
  );
};

export default Blogs;
