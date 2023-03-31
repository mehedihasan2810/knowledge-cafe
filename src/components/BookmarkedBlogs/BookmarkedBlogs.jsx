import React from "react";
import './BookmarkedBlogs.scss';
const BookmarkedBlogs = ({bookmarkBlogs}) => {
  console.log(bookmarkBlogs)
  return (
  <div className="bookmark-container">
   <h4>Bookmarked Blogs: {bookmarkBlogs.length}</h4>
   <h5>Master Microsoft Power Platform and Become an In-Demand!</h5>
   <h5>Master Microsoft Power Platform and Become an In-Demand!</h5>
   <h5>Master Microsoft Power Platform and Become an In-Demand!</h5>
  </div>
  )
};

export default BookmarkedBlogs;
