import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Blog from "../Blog/Blog";
import BookmarkedBlogs from "../BookmarkedBlogs/BookmarkedBlogs";
import TimeSpent from "../TimeSpent/TimeSpent";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const [bookmarkBlogs, setBookmarkBlogs] = useState([]);
  const [isToastShow, setIsToastShow] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");

  function handleTimeSpent(readTime) {
    setTotalTimeSpent((prevTime) => {
      const totalTime = prevTime + readTime;
      return totalTime;
    });
  }

  function handleBookmarkBlogs(title) {
    if (bookmarkBlogs.includes(title)) {
      setIsToastShow(true);
      setCurrentTitle(title);
      return;
    }
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
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log(error);
      });

    let timerId;
    if (isToastShow) {
      timerId = setTimeout(() => {
        setIsToastShow(false);
      }, 2000);
    }

    return () => {
      abortController.abort();
      clearTimeout(timerId);
    };
  }, [isToastShow]);

  return (
    <main>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blogData={blog}
            onTimeSpent={handleTimeSpent}
            onAddBookmarkBlogs={handleBookmarkBlogs}
            isToastShow={isToastShow}
            currentTitle={currentTitle}
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
