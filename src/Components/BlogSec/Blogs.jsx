import React from "react";
import { month_names } from "../../Data";
import "./Blogs.scss";
import BlogCard from "./BlogCard";
import blog1 from "../../Assets/images/blog1.jpg";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="heading">
        <h2>MONTHLY MASH</h2>
        <p>{month_names[new Date().getMonth()]}</p>
      </div>
      <div className="blog-item">
        <BlogCard
          img={blog1}
          title="sanfkd asfkdj"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          link="/contact"
        />
        <BlogCard
          img={blog1}
          title="sanfkd asfkdj"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          link="/contact"
        />
        <BlogCard
          img={blog1}
          title="sanfkd asfkdj"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          link="/contact"
        />
      </div>
      <div className="Blog-btn">
        <button className="btn">View All</button>
      </div>
    </div>
  );
};

export default Blogs;
