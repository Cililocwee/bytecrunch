import React, { useEffect, useState } from "react";
import BlogTag from "../components/BlogTag";
import Pac from "../assets/beaneater.svg";
import Moment from "moment";

export default function AdminBlogPrevCard({ title, blurb, date_posted, tags }) {
  Moment.locale("en");

  function makeBlurb(content) {
    let truncated = content.split(".")[0] + "...";

    if (truncated.length > 100) {
      return truncated.slice(0, 100) + "...";
    } else {
      return content.split(".")[0] + "...";
    }
  }

  function makeTitle(content) {
    let truncated = content.split(".")[0] + "...";

    if (truncated.length > 20) {
      return truncated.slice(0, 20) + "...";
    } else {
      return content.split(".")[0] + "...";
    }
  }

  return (
    <div className="m-2">
      <div
        className={`p-3 bg-cyan-300 opacity-60 hover:opacity-90 h-[200px] flex flex-col justify-between w-[200px]  rounded-xl overflow-hidden shadow-lg`}
      >
        <h2 className="font-bold text-black">{makeTitle(title)}</h2>
        <p className="text-black">{makeBlurb(blurb)}</p>
        <small className="text-black">{date_posted}</small>
      </div>
    </div>
  );
}
