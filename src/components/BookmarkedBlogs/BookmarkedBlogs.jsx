import React from "react";
import "./BookmarkedBlogs.scss";
const BookmarkedBlogs = ({ bookmarkBlogs }) => {
  return (
    <div className="bookmark-container">
      <h4>Bookmarked Blogs: {bookmarkBlogs.length}</h4>
      {bookmarkBlogs.length !== 0 &&
        bookmarkBlogs.map((bookmarkBlog, index) => <h5 key={index}>{bookmarkBlog}</h5>)}
    </div>
  );
};

export default BookmarkedBlogs;
