import BlogCard from "../component/BlogCard";
import BlogCard_2 from "../component/BlogCard_2";
import { blogData } from "../data/data";

const BlogPage = () => {
  return (
    <div className="flex gap-5 flex-wrap items-center mx-1 justify-evenly">
      {blogData.map((blog, index) => (
        <BlogCard_2 blog={blog} key={blog.id} index={index + 1} />
        // <BlogCard blog={blog} key={blog.id} index={index+1}/>
      ))}
      {/* <BlogCard_2 blog={blogData[0]} index={1} />
      <BlogCard blog={blogData[0]} index={1}/> */}
    </div>
  );
};

export default BlogPage;
