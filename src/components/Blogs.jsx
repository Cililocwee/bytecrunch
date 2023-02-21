import React, { useEffect, useState } from "react";
import Moment from "moment";
import { Link } from "react-router-dom";
import { db, getBlogs } from "../../firebase";

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
    <div className=" px-8 flex flex-col text-center align-items-center pt-3 pb-16 lg:pt-8 lg:pb-24">
      <div className="flex flex-col-reverse">
        {blogs.map((item, k) => (
          <div
            className="border border-black-800 border-solid mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue"
            key={k}
          >
            <h4 className="text-left my-4 lemb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-4xl">
              <Link
                className="no-underline text-slate-500"
                to={`/blog/${item.id}`}
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
