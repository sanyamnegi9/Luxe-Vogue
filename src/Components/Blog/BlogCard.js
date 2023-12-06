import React from "react";
import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
  const { id, image, title, desc } = blog;
  return (
    <div key={id} className="blog-card">
      <div className="blog-img">
        <img src={image} alt="" />
      </div>
      <div className="blog-info">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <Link to={`/blog/${id}/${title}`}>Read more...</Link>
      </div>
    </div>
  );
};

export default BlogCard;
