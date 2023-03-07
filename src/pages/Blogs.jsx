import React, { useEffect, useState } from "react";
import Moment from "moment";
import { Link } from "react-router-dom";
import { db, getBlogs } from "../../firebase";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  useEffect(() => {
    getBlogs(db).then((data) => {
      setBlogs(data);
    });
  }, []);

  const [blogs, setBlogs] = useState([
    {
      title: "",
      content: "",
      date_posted: new Date().toLocaleString(),
    },
  ]);

  Moment.locale("en");

  return (
    <div className="rounded-lg mt-8 mb-auto mx-auto px-8 w-full text-center align-items-center">
      <div className="flex flex-wrap max-w-5xl m-auto justify-center gap-4 place-items-center">
        {blogs.map((item, k) => (
          <BlogCard
            key={k}
            title={
              <Link
                className="no-underline text-gray-800"
                to={`/blog/${item.id}`}
                key={crypto.randomUUID()}
              >
                {item.title}
              </Link>
            }
            tags={item.tags}
            date_posted={item.date_posted}
            blurb={item.content}
          />
        ))}
      </div>
    </div>
  );
}
