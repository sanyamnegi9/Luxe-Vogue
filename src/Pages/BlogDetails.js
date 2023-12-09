import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../Components/Loading";
import { blogData } from "../Data";

const BlogDetails = () => {
  const { blogId, blogTitle } = useParams();

  const blog = blogData.find((blog) => {
    return blog.id === blogId || blog.title === blogTitle;
  });

  // if product is not found
  if (!blog) {
    return <Loading />;
  }
  
  const { id, title, image, content, author, date, tags } = blog;

  return (
    <div
      key={id}
      className="max-w-[70rem] w-full px-6 sm:px-4 mx-auto flex flex-col items-center gap-4 mb-12 py-3 rounded-2xl bg-background-sec"
    >
      <div>
        <h2 className="text-center">{title}</h2>
        <p className="text-sm text-center mt-2">{date}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="h-[40vw] md:h-[30rem] object-contain"
      />
      <p className=" text-[.9rem] sm:text-[1.1rem] py-3">{content}</p>

      <div className="flex justify-between w-full flex-wrap gap-4">
        <div className="flex gap-2 items-start flex-wrap">
          Tags:
          {tags.slice(0, 4).map((tag) => (
            <p className="text-[.85rem]">{tag}</p>
          ))}
        </div>
        <h3>{`Author: ${author}`}</h3>
      </div>
    </div>
  );
};

export default BlogDetails;
