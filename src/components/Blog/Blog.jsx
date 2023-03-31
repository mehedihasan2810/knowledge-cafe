import React from "react";
import "./Blog.scss";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Blog = ({blogData, onTimeSpent, onAddBookmarkBlogs}) => {

  const {
    author,
    title,
    tag,
    authorImage,
    coverImage,
    readTime,
    published,
  } = blogData;
  return (
    <article className="blog-container">
      <img className="img-cover" src={coverImage} alt="" />
      <div className="blog-body">
        <div className="author-info-container">
          <div className="author-info">
            <img className="img-author" src={authorImage} alt="" />
            <div>
              <h4 className="author-name">{author}</h4>
              <p className="p-sm">{published}</p>
            </div>
          </div>
          <div className="read-bookmark">
            <p className="p-sm">{readTime} min read</p>
            <button onClick={() => onAddBookmarkBlogs(title)} className="btn-bookmark"><BookmarkBorderIcon/></button>
          </div>
        </div>
        <h2 className="heading2">{title}</h2>
        <p className="tags p-sm">{tag}</p>
        <button onClick={() => onTimeSpent(readTime)} className="btn-mark">Marked as read</button>
      </div>
    </article>
  );
};

export default Blog;
