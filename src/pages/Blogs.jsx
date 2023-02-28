import React, { useEffect, useState } from "react";
import Moment from "moment";
import { Link } from "react-router-dom";
import { db, getBlogs } from "../../firebase";
import BlogCard from "../components/BlogCard";
import GlassCard from "../experimental/GlassCard";

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
      date_posted: "",
    },
  ]);

  Moment.locale("en");

  return (
    <div className="rounded-lg mt-8 mb-auto mx-auto px-8 w-full text-center align-items-center">
      <div className="flex flex-wrap max-w-5xl m-auto justify-center gap-4 place-items-center">
        {blogs.map((item, k) => (
          <BlogCard
            title={
              <Link
                className="no-underline text-gray-800"
                to={`/blog/${item.id}`}
              >
                {item.title}
              </Link>
            }
          />
        ))}
        {/* {blogs.map((item, k) => (
          <div
            className=" mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue"
            key={k}
          >
            <h4 className="text-left my-4 lemb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-4xl">
              <Link
                className="no-underline text-gray-800"
                to={`/blog/${item.id}`}
              >
                {item.title}
              </Link>
            </h4>
            <div className="flex justify-between">
              <p className="my-3 text-gray-700 text-sm">
                Published: {Moment(item.date_posted).calendar()}
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
