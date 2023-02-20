import React, { useEffect, useState } from "react";
import Moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CommentInput from "./CommentInput";
import CommentCard from "./CommentCard";
import { db, getSpecificBlog } from "../../firebase";

export default function DetailedBlog({ id, user }) {
  const location = window.location.href.split("/blog/")[1];
  const navigate = useNavigate();
  Moment.locale("en");

  const [blog, setBlog] = useState([
    {
      title: "Loading",
      content: "",
      date_posted: "",
    },
  ]);

  const [input, setInput] = useState({
    username: "",
    profile_picture_url: "",
    comment_body: "",
    date_posted: "",
    associated_blog: location,
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSpecificBlog(db, location).then((results) => {
      // console.log(results);
      setBlog(results);
    });
    console.log("Detailed Blog Render");
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
        username: profile.given_name,
        profile_pic_url: profile.picture,
        date_posted: new Date(),
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div
      id="detailed_blog"
      className="px-8 mb-auto flex flex-col items-center pt-3 pb-16 lg:pt-8 lg:pb-24  dark:bg-gray-900"
    >
      {blog && (
        <div className="pb-8 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <h1 className="text-center my-4 lemb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-whiteading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            {blog.title}
          </h1>
          <p className="whitespace-pre-wrap">{decodeHtml(blog.content)}</p>
          <div className="flex justify-between items-center">
            <p className="my-3 text-slate-400 text-sm">
              Posted: {Moment(blog.date_posted).calendar()}
            </p>
            {user?.uid === import.meta.env.VITE_ADMIN_ID && (
              <div className="flex align-items-center">
                <button
                  onClick={handleUpdate}
                  className="m-3 w-16 h-8 px-3 py-2 text-xs font-medium  text-center text-white bg-stone-400 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
                >
                  Edit
                </button>
                <button
                  onClick={confirmDelete}
                  className="m-3 h-8 w-16 px-3 py-2 text-xs font-medium text-center text-white bg-stone-700 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {user && (
        <CommentInput
          changefnc={handleChange}
          comment_body={input.comment_body}
          submitfnc={handleSubmit}
        />
      )}

      {comments.map((comment) => (
        <CommentCard
          comment_body={comment.comment_body}
          date_posted={comment.date_posted}
          username={comment.username}
          profile_pic_url={comment.profile_pic_url}
          comment_id={comment._id}
          admin_key={user ? user?.uid === import.meta.env.VITE_ADMIN_ID : false}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
}
