import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Blog from "../Blog/Blog";
import BookmarkedBlogs from "../BookmarkedBlogs/BookmarkedBlogs";
import TimeSpent from "../TimeSpent/TimeSpent";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const [bookmarkBlogs, setBookmarkBlogs] = useState([]);

  function handleTimeSpent(readTime) {
    setTotalTimeSpent((prevTime) => {
      const totalTime = prevTime + readTime;
      return totalTime;
    });
  }

  function handleBookmarkBlogs(title) {
    setBookmarkBlogs((prevBookmark) => {
      return [...prevBookmark, title];
    });
  }

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
          <Blog
            key={blog.id}
            blogData={blog}
            onTimeSpent={handleTimeSpent}
            onAddBookmarkBlogs={handleBookmarkBlogs}
          />
        ))}
      </div>
      <aside className="sticky">
        <TimeSpent totalTimeSpent={totalTimeSpent} />
        <BookmarkedBlogs bookmarkBlogs={bookmarkBlogs} />
      </aside>
    </main>
  );
};

export default Blogs;
