import React from "react";
import { blogData, month_names } from "../../Data";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="blogs-container">
      <div className="heading">
        <h2>MONTHLY MASH</h2>
        <p>{month_names[new Date().getMonth()]}</p>
      </div>
      <div className="blog-items-container">
        {blogData.map((blog) => (
          <BlogCard
            blog={blog}
            key={blog.id}
            link="/blog-page"
          />
        ))}
      </div>
      <button className="btn blog-btn">View All</button>
    </div>
  );
};

export default BlogSection;
