import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, image, title, content } = blog;


  return (
    <div
      key={id}
      className="bg-background-sec h-[22rem] w-[20rem] flex flex-col justify-between"
    >
      <div className="max-h-[13.5rem] w-full bg-white overflow-hidden">
        <img src={image} alt={title} className="w-fit h-fit object-contain" />
      </div>
      <div className="mb-2 flex flex-col gap-1 px-2">
        <p className="text-[1.2rem] font-medium mb-2">{title}</p>
        <p className="text-[.9rem]">{`${content.slice(0, 70)}...`}</p>
        <Link to={`/blog/${id}/${title}`} className="font-medium underline">
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
