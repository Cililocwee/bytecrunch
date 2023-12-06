import React, { useEffect, useState } from "react";
import Moment from "moment";
import { useNavigate } from "react-router-dom";
import CommentInput from "../components/CommentInput";
import CommentCard from "../components/CommentCard";
import { auth, db, getComments, getSpecificBlog } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import BlogTag from "../components/BlogTag";

export default function DetailedBlog() {
  // TODO: Refactor as Moment is deprecated
  Moment.locale("en");

  const location = window.location.href.split("/blog/")[1];
  const navigate = useNavigate();

  const [blog, setBlog] = useState([
    {
      title: "Loading",
      content: "",
      date_posted: "",
      tags: "",
    },
  ]);

  /**
   * Tracks changes to comments and rerenders on post or delete
   */
  const [commentTrigger, setCommentTrigger] = useState(false);
  const [comments, setComments] = useState([]);

  /**
   * Retrieves specific blog on load
   * TODO: Refactor to pull from cache
   */
  useEffect(() => {
    getSpecificBlog(db, location).then((results) => {
      setBlog(results);
    });
    getComments(db, location).then((results) => {
      setComments(results);
    });
    console.log("Detailed Blog Render");
  }, [commentTrigger]);

  /**
   * Confirms user intention before editing blog (admin only)
   */
  function handleEdit() {
    if (confirm("Proceed to edit?")) {
      navigate(`/update/${location}`);
    }
  }

  /**
   * Confirms user intention before deleting blog (admin only)
   */
  async function confirmDelete() {
    if (confirm("Delete?")) {
      await deleteDoc(doc(db, "blogs", location)).then(() => {
        alert("Blog deleted. Redirecting...");
        navigate("/");
      });
    }
  }

  return (
    <div
      id="detailed_blog"
      className="z-30 px-8 mb-auto flex flex-col items-center pt-3 pb-16 lg:pt-8 lg:pb-24 "
    >
      {blog && (
        <div className="pb-8 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
          <h1 className="text-cyan-300 text-center my-4 lemb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl">
            {blog.title}
          </h1>
          <p className="whitespace-pre-wrap">{blog.content}</p>
          <section className="tags pt-5">
            {blog.tags && blog.tags.map((tag) => <BlogTag content={tag} />)}
          </section>
          <div className="flex justify-between items-center">
            <p className="my-3 text-slate-400 text-sm">
              Posted: {Moment(blog.date_posted).calendar()}
            </p>
            {auth.currentUser?.uid == import.meta.env.VITE_ADMIN_ID ? (
              <div className="flex align-items-center">
                <button
                  onClick={handleEdit}
                  className="m-3 w-16 h-8 px-3 py-2 text-xs font-medium  text-center text-white bg-stone-400 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 "
                >
                  Edit
                </button>
                <button
                  onClick={confirmDelete}
                  className="m-3 h-8 w-16 px-3 py-2 text-xs font-medium text-center text-white bg-stone-700 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 "
                >
                  Delete
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}

      <CommentInput
        blog={location}
        trigger={[commentTrigger, setCommentTrigger]}
      />

      {comments.map((comment) => (
        <CommentCard
          comment_body={comment.comment_body}
          date_posted={comment.date_posted}
          username={comment.username}
          profile_pic_url={comment.profile_pic_url}
          comment_id={comment.id}
          deletecheck={[commentTrigger, setCommentTrigger]}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
}
