import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../Data";
import Loading from "../Components/Loading";

const BlogDetails = () => {
  const { blogId, blogTitle } = useParams();

  const blog = blogData.find((blog) => {
    return blog.id === blogId || blog.title === blogTitle;
  });

  const { id, title, image, blogContent } = blog;

  // if product is not found
  if (!blog) {
    return <Loading />;
  }

  return (
    <div key={id}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <div>{blogContent}</div>
    </div>
  );
};

export default BlogDetails;
