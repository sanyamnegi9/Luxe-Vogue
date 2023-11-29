import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.scss";

const BlogCard = ({ id, img, title, desc, link }) => {
  return (
    <div key={id} className="blog-card">
      <div className="blog-img">
        <img src={img} alt="" />
      </div>
      <div className="blog-info">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <Link to={link}>Read more...</Link>
      </div>
    </div>
  );
};

export default BlogCard;
