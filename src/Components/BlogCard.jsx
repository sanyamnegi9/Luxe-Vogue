import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Blogs.scss";

const BlogCard = ({ img, title, desc, link }) => {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src={img} alt="" />
      </div>
      <div className="blog-info">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </div>
      <Link to={link}>Read more...</Link>
    </div>
   
  );
};

export default BlogCard;
