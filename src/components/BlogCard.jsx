import React, { useEffect, useState } from "react";
import BlogTag from "./BlogTag";

export default function BlogCard({ splash, title, blurb, publish, tags }) {
  const roundChoices = [
    "rounded-tr-[60px]",
    "rounded-bl-[60px]",
    "rounded-br-[60px]",
    "rounded-tl-[60px]",
  ];

  const [pudgy, setPudgy] = useState("rounded-tr-lg");

  // TODO This will directly take tags prop which will feed tags from Firebase

  useEffect(() => {
    const roll = Math.floor(Math.random() * roundChoices.length);
    console.log(title + ": " + tags);

    setPudgy(roundChoices[roll]);
  }, []);
  return (
    // TODO I want a dim tracer running along the edge
    // TODO and on hover, I want it to speed up and glow brighter

    <div class="m-1 w-fit z-20 relative">
      <div className="">
        <div
          class={`${pudgy} justify-center bg-cyan-400 opacity-60 hover:opacity-90 h-[250px] flex flex-col  w-fit max-w-xs rounded-xl overflow-hidden shadow-lg`}
        >
          <div class="px-4 py-4">
            <div class="font-bold text-xl mb-2">{title || "Mountain"}</div>
            <p class="text-gray-700 text-base">
              {blurb ||
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
            </p>
          </div>
          <div class="px-6 pb-2">
            {tags?.map((tag) => (
              <BlogTag content={tag} />
            ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
