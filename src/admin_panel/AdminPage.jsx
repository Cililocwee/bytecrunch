import React, { useState } from "react";
import CustomGoogleButton from "../components/CustomGoogleButton";
import { auth, db, getBlogs } from "../../firebase";
import { Link } from "react-router-dom";
import AdminBlogPrevCard from "./AdminBlogPrevCard";

export default function AdminPage() {
  const [blogs, setBlogs] = useState([]);

  const adminCheck = () => {
    if (auth.currentUser?.uid != null) {
      if (auth.currentUser.uid == import.meta.env.VITE_ADMIN_ID) {
        return true;
      }
    }
    return false;
  };

  const handleQuery = () => {
    if (adminCheck()) {
      getBlogs(db).then((data) => {
        setBlogs(data);
      });
    } else {
      alert("I can't let you do that, Dave.");
    }
  };

  return (
    <div className="flex justify-between bg-gray-700 h-5/6">
      <nav className="bg-gray-500 w-32 align-middle flex flex-col justify-between">
        <h2 className="text-center mt-4 mb-9 font-bold text-gray-900">
          Admin Panel
        </h2>

        <ul className="text-center flex flex-col m-auto">
          <li className="mb-4">
            {/* TODO: Refactor into a modal */}
            <Link to={"/create"}>Create</Link>
          </li>
          <li className="mb-4">
            <button onClick={handleQuery}>Check Blogs</button>
          </li>
          <li className="mb-4">
            <button>Comments</button>
          </li>
        </ul>

        <CustomGoogleButton />
      </nav>
      <main className="m-auto bg-black flex flex-wrap w-3/4 h-3/4 overflow-auto justify-center">
        {blogs.map((item, k) => (
          <AdminBlogPrevCard
            key={k}
            title={item.title}
            date_posted={item.date_posted}
            blurb={item.content}
          />
        ))}
      </main>
    </div>
  );
}
