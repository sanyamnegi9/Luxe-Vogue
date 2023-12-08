import React from "react";
import { blogData, month_names } from "../../Data";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-8">
      <div className="flex flex-col items-center mb-2">
        <h2>MONTHLY MASH</h2>
        <p>{month_names[new Date().getMonth()]}</p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 ">
        {blogData.slice(0, 4).map((blog) => (
          <BlogCard blog={blog} key={blog.id} link="/blog-page" />
        ))}
      </div>
      <Link className="btn primary-btn my-4 mx-8">View All</Link>
    </div>
  );
};

export default BlogSection;
