import React from "react";
import Moment from "moment";
import { auth } from "../../firebase";

export default function CommentCard({
  comment_body,
  date_posted,
  profile_pic_url,
  username,
  comment_id,
  admin_key,
}) {
  Moment.locale("en");

  function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  function handleDelete() {
    alert("Delete!");
  }

  function confirmDelete() {
    if (confirm(`Delete comment ${comment_id}: ${comment_body}?`)) {
      handleDelete();
    }
  }

  return (
    <article className="max-w-sm p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src={profile_pic_url}
              alt={`${username}`}
            />
            {username}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
              {Moment(date_posted).calendar()}
            </time>
          </p>
        </div>
        <button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        ></button>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">
        {decodeHtml(comment_body)}
      </p>
      <div className="flex items-center mt-4 space-x-4"></div>
      {auth.currentUser &&
        auth.currentUser.uid === import.meta.env.VITE_ADMIN_ID && (
          <button onClick={confirmDelete} className="flex ml-auto text-red-600">
            Delete Comment
          </button>
        )}
    </article>
  );
}
