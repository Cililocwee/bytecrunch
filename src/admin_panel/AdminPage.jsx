import React, { useState } from "react";
import CustomGoogleButton from "../components/CustomGoogleButton";
import { auth, db, getBlogs } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import AdminBlogPrevCard from "./AdminBlogPrevCard";

export default function AdminPage() {
  const [adminFlag, setAdminFlag] = useState(false);

  const [blogs, setBlogs] = useState([]);

  const handleQuery = () => {
    if (adminFlag) {
      getBlogs(db).then((data) => {
        setBlogs(data);
      });
    }
  };

  // Currently unimplemented
  onAuthStateChanged(auth, (user) => {
    if (user?.uid === import.meta.env.VITE_ADMIN_ID) {
      setAdminFlag(true);
    } else {
      setAdminFlag(false);
      setBlogs([]);
    }
  });

  return (
    <div className="flex justify-between bg-gray-700 h-5/6">
      <nav className="bg-gray-500 w-32 align-middle flex flex-col justify-between">
        <h2 className="text-center mt-4 mb-9 font-bold text-gray-900">
          Admin Panel
        </h2>
        {adminFlag && (
          <ul className="text-center flex flex-col m-auto">
            <li className="mb-4">
              <Link to={"/create"}>Create</Link>
            </li>
            <li className="mb-4">
              <button onClick={handleQuery}>Query Blogs</button>
            </li>
            <li className="mb-4">
              <button>Comments</button>
            </li>
          </ul>
        )}

        {}
        <CustomGoogleButton adminFlag={adminFlag} />
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
