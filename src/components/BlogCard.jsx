import React from "react";
import Tilt from "react-parallax-tilt";

export default function BlogCard({ splash, title, blurb, publish, tags }) {
  return (
    <div class="m-1 w-fit">
      <Tilt>
        <div class=" bg-cyan-200 w-fit max-w-xs  p-4 rounded overflow-hidden shadow-lg">
          <img class="w-full" src={splash || "/mountain.jpg"} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{title || "Mountain"}</div>
            <p class="text-gray-700 text-base">
              {blurb ||
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
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
