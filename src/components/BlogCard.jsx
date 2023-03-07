import React, { useEffect, useState } from "react";
import BlogTag from "./BlogTag";
import Pac from "../assets/beaneater.svg";
import Moment from "moment";

export default function BlogCard({ title, blurb, date_posted, tags }) {
  Moment.locale("en");
  // Randomly assigns roundness to edges
  const roundChoices = [
    "rounded-tr-[60px]",
    "rounded-bl-[60px]",
    "rounded-br-[60px]",
    "rounded-tl-[60px]",
  ];
  const [pudgy, setPudgy] = useState("rounded-tr-lg");

  useEffect(() => {
    const roll = Math.floor(Math.random() * roundChoices.length);
    setPudgy(roundChoices[roll]);
  }, []);

  function makeBlurb(content) {
    let truncated = content.split(".")[0] + "...";

    if (truncated.length > 100) {
      return truncated.slice(0, 100) + "...";
    } else {
      return content.split(".")[0] + "...";
    }
  }

  return (
    <div className="m-1 w-fit z-20 relative">
      <div className="">
        <div
          className={`${pudgy} justify-center bg-cyan-400 opacity-60 hover:opacity-90 h-[300px] flex flex-col  w-fit max-w-xs rounded-xl overflow-hidden shadow-lg`}
        >
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">{title || "Blog"}</div>

            {blurb ? (
              <p className="text-gray-700 text-base">{makeBlurb(blurb)}</p>
            ) : (
              <img className="h-12" src={Pac} alt="loading waka waka waka" />
            )}
          </div>
          <p className="text-pink-500 pb-2">
            Posted: {Moment(date_posted).calendar() || "Recently"}
          </p>
          <div className="px-6 pb-2">
            {tags?.map((tag) => (
              <BlogTag key={crypto.randomUUID()} content={tag} />
            ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
