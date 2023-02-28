import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import Programming from "../assets/programming_splash.jpg";

export default function BlogCard({ splash, title, blurb, publish, tags }) {
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
    console.log(pudgy);
  }, []);
  return (
    <div class="m-1 w-fit z-20">
      <Tilt>
        <div
          class={`${pudgy} bg-cyan-300 w-fit max-w-xs rounded overflow-hidden shadow-lg`}
        >
          <img
            class="w-full h-32 object-cover"
            src={splash || Programming}
            alt="Mountain"
          />
          <div class="px-4 py-4">
            <div class="font-bold text-xl mb-2">{title || "Mountain"}</div>
            <p class="text-gray-700 text-base">
              {blurb ||
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
            </p>
          </div>
          <div class="px-6 pb-2 mb-auto">
            {tags || (
              <>
                {" "}
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </>
            )}
          </div>
        </div>{" "}
      </Tilt>
    </div>
  );
}
