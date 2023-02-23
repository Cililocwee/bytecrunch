import React from "react";
import { useNavigate } from "react-router-dom";
export default function FloatingCreate() {
  const navigate = useNavigate();

  // TODO This isn't rendering now
  return (
    <button
      onClick={() => navigate("/create")}
      className="index-90 fixed bottom-0 right-0 m-3 inline-flex items-center px-4 py-2 bg-stone-500 hover:bg-stone-700 text-stone-200 text-sm font-medium rounded-md"
    >
      New Post
    </button>
  );
}
