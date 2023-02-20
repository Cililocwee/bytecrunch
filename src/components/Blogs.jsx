import React, { useEffect, useState } from "react";
import "./components.css";
import Moment from "moment";
import { Link } from "react-router-dom";

export default function Blogs() {
  let ADDRESS;
  if (import.meta.env.VITE_STATUS === "production") {
    ADDRESS = import.meta.env.VITE_PRODUCTION_ADDRESS;
  } else {
    ADDRESS = import.meta.env.VITE_DEV_ADDRESS;
  }

  const [blogs, setBlogs] = useState([
    {
      title: "",
      content: "",
      date_posted: "",
    },
  ]);

  useEffect(() => {
    fetch(ADDRESS + "/blogs")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setBlogs([...jsonRes]);
      })
      .catch((err) => console.error(err));
  }, []);

  Moment.locale("en");

  return (
    <div className=" px-8 flex flex-col text-center align-items-center pt-3 pb-16 lg:pt-8 lg:pb-24  dark:bg-gray-900">
      <div className="flex flex-col-reverse">
        {blogs.map((item, k) => (
          <div
            className="border border-black-800 border-solid mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
            key={k}
          >
            <h4 className="text-left my-4 lemb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-4xl dark:text-whiteading-tight text-gray-900 lg:mb-3 lg:text-4xl dark:text-white">
              <Link
                className="no-underline text-slate-500"
                to={`/blog/${item._id}`}
              >
                {item.title}
              </Link>
            </h4>
            <div className="flex justify-between">
              <p className="my-3 text-slate-400 text-sm">
                Published: {Moment(item.date_posted).calendar()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
