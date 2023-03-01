import React, { useEffect, useState } from "react";
import BlogTag from "./BlogTag";

export default function BlogCard({ splash, title, blurb, publish, tags }) {
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
    <div class="m-1 w-fit z-20 relative">
      <div className="">
        <div
          class={`${pudgy} justify-center bg-cyan-400 opacity-60 hover:opacity-90 h-[250px] flex flex-col  w-fit max-w-xs rounded-xl overflow-hidden shadow-lg`}
        >
          <div class="px-4 py-4">
            <div class="font-bold text-xl mb-2">{title || "Blog"}</div>
            <p class="text-gray-700 text-base">
              {blurb
                ? makeBlurb(blurb)
                : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
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
