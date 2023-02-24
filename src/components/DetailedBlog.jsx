import React, { useEffect, useState } from "react";
import Moment from "moment";
import { useNavigate } from "react-router-dom";
import CommentInput from "./CommentInput";
import CommentCard from "./CommentCard";
import { auth, db, getComments, getSpecificBlog } from "../../firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import CustomGoogleButton from "./CustomGoogleButton";

export default function DetailedBlog() {
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
    comment_body: "",
  });

  // Tracks changes to comments and rerenders on post or delete
  const [commentTrigger, setCommentTrigger] = useState(false);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSpecificBlog(db, location).then((results) => {
      // console.log(results);
      setBlog(results);
    });
    getComments(db, location).then((results) => {
      setComments(results);
    });
    console.log("Detailed Blog Render");
  }, [commentTrigger]);

  // Change and submit functions are for comments
  // TODO Consider separate component
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // TODO I don't like the POST methods being here
    const id = crypto.randomUUID();
    await setDoc(doc(db, "comments", id), {
      username: auth.currentUser.displayName,
      profile_pic_url: auth.currentUser.photoURL,
      comment_body: input.comment_body,
      date_posted: new Date().toLocaleString(),
      associated_blog: location,
      id: id,
    }).then(() => {
      setInput({ comment_body: "" });
      setCommentTrigger(!commentTrigger);
    });

    // .then(() => alert("Posted"))
  }

  // These functions are for the actual blog
  function handleEdit() {
    if (confirm("Proceed to edit?")) {
      navigate(`/update/${location}`);
    }
  }

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
      className="px-8 mb-auto flex flex-col items-center pt-3 pb-16 lg:pt-8 lg:pb-24 "
    >
      {blog && (
        <div className="pb-8 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
          <h1 className="text-center my-4 lemb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
            {blog.title}
          </h1>
          <p className="whitespace-pre-wrap">{blog.content}</p>
          <div className="flex justify-between items-center">
            <p className="my-3 text-slate-400 text-sm">
              Posted: {Moment(blog.date_posted).calendar()}
            </p>
            {auth.currentUser !== null &&
              auth?.currentUser.uid === import.meta.env.VITE_ADMIN_ID && (
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
              )}
          </div>
        </div>
      )}

      <CustomGoogleButton />

      <CommentInput
        changefnc={handleChange}
        comment_body={input.comment_body}
        submitfnc={handleSubmit}
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
