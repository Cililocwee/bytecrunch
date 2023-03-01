import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase";

export default function CommentInput({ blog, trigger }) {
  const [input, setInput] = useState({
    comment_body: "",
  });

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
      associated_blog: blog,
      id: id,
    }).then(() => {
      setInput({ comment_body: "" });
      trigger[1](!trigger[0]);
    });
  }

  return (
    <div className="mb-8 max-w-lg rounded-lg shadow-md shadow-cyan-300/50">
      <form action="" className="w-full p-4">
        <div className="mb-2">
          <label htmlFor="comment" className="text-lg text-pink-600">
            Add a comment
          </label>
          <textarea
            className="w-full h-20 p-2 border rounded text-gray-800"
            name="comment_body"
            placeholder=""
            onChange={handleChange}
            value={input.comment_body}
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="px-3 py-2 text-sm text-pink-200 bg-cyan-600 rounded"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}
