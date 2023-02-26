import React from "react";
import Moment from "moment";
import { auth, db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default function CommentCard({
  comment_body,
  date_posted,
  profile_pic_url,
  username,
  comment_id,
  deletecheck,
}) {
  Moment.locale("en");

  function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  async function confirmDelete() {
    if (confirm("Delete?")) {
      await deleteDoc(doc(db, "comments", comment_id)).then(() => {
        alert("Comment deleted...");
        deletecheck[1](!deletecheck[0]);
        // TODO This isn't an optimal solution for this
        // location.reload();
      });
    }
  }

  return (
    <article className="max-w-sm p-6 mb-6 text-base bg-background-secondary rounded-lg ">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 ">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src={profile_pic_url}
              alt={`${username}`}
            />
            {username}
          </p>
          <p className="text-sm text-gray-400 ">
            {Moment(date_posted).calendar()}
          </p>
        </div>
      </footer>
      <p className="text-gray-500 ">{decodeHtml(comment_body)}</p>
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
