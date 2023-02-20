import React from "react";

export default function CommentInput({ changefnc, comment_body, submitfnc }) {
  return (
    <div className="mb-8 max-w-lg rounded-lg shadow-md shadow-stone-600/50">
      <form action="" className="w-full p-4">
        <div className="mb-2">
          <label htmlFor="comment" className="text-lg text-gray-600">
            Add a comment
          </label>
          <textarea
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment_body"
            placeholder=""
            onChange={changefnc}
            value={comment_body}
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            onClick={submitfnc}
            className="px-3 py-2 text-sm text-purple-100 bg-stone-600 rounded"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}
