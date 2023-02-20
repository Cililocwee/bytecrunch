import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function FloatingCreate() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/create")}
      className="fixed bottom-0 right-0 m-3 inline-flex items-center px-4 py-2 bg-stone-500 hover:bg-stone-700 text-stone-200 text-sm font-medium rounded-md"
    >
      New Post
    </button>
  );
}
