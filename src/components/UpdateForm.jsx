import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, getSpecificBlog } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function UpdateForm() {
  const location = window.location.href.split("/update/")[1];
  const [input, setInput] = useState([
    {
      title: "Loading",
      content: "",
      date_posted: "",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    getSpecificBlog(db, location).then((results) => {
      setInput(results);
    });
    console.log("Update blog render");
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  async function handleClick(event) {
    event.preventDefault();

    if (input.content.length < 1) {
      return;
    }

    if (input.title.length < 1) {
      return;
    }

    const blogRef = doc(db, "blogs", location);
    await updateDoc(blogRef, {
      title: input.title,
      content: input.content,
    }).then(() => alert("Edit completed. Redirecting..."));

    navigate(`/blog/${location}`);
  }

  return (
    <div>
      <div className="flex flex-col items-center pt-3 pb-16 lg:pt-16 lg:pb-24  dark:bg-gray-900">
        <h1 className="text-5xl font-bold mt-0 mb-6">Update a Post</h1>
        <form className="gap-5 items-stretch mb-3 w-96 flex flex-col">
          <div className="form-group">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title:
            </label>
            <input
              onChange={handleChange}
              name="title"
              value={input.title || ""}
              autoComplete="off"
              type="text"
              placeholder="Blog title..."
              className="block p-2.5 w-full text-sm 
            text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-red-500 
            focus:border-blue-500 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="content"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Blog content:
            </label>
            <textarea
              onChange={handleChange}
              autoComplete="off"
              name="content"
              value={input.content || ""}
              placeholder="Blog contents..."
              rows="8"
              className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
             bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus: focus:border-blue-600 focus:outline-none
          "
            ></textarea>
          </div>

          <button
            onClick={handleClick}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block 
          px-6 py-2.5 bg-blue-600 text-white 
          font-medium text-xs leading-tight 
          uppercase rounded shadow-md hover:bg-blue-700 
          hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
          focus:outline-none focus:ring-0 active:bg-blue-800 
          active:shadow-lg transition duration-150 ease-in-out
          mx-auto mt-3"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}
