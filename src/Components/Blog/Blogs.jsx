import React from "react";
import { month_names } from "../../Data";
import "./Blogs.scss";
import BlogCard from "./BlogCard";
import { blogData } from "../../Data";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="heading">
        <h2>MONTHLY MASH</h2>
        <p>{month_names[new Date().getMonth()]}</p>
      </div>
      <div className="blog-items-container">
        {blogData.map(({ id, img, title, blogContent }) => (
          <BlogCard
            id={id}
            img={img}
            title={title}
            desc={blogContent}
            link="/blog-page"
          />
        ))}
      </div>
      <button className="btn blog-btn">View All</button>
    </div>
  );
};

export default Blogs;
