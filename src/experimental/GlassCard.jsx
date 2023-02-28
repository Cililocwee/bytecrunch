import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import BlogTag from "../components/BlogTag";

export default function GlassCard({ splash, title, blurb, publish, tags }) {
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
  return (
    // TODO I want a dim tracer running along the edge
    // TODO and on hover, I want it to speed up and glow brighter

    <div class="m-1 w-fit z-20">
      <Tilt>
        <div className="box justify-center bg-cyan-400 opacity-60 hover:opacity-90 h-[250px] flex flex-col  w-fit max-w-xs rounded overflow-hidden shadow-lg">
          <div className="glass"></div>
          <div className="content">
            <h2>{title}</h2>
            <p>{publish}</p>
            <BlogTag content={"photography"} />
          </div>
        </div>
      </Tilt>
    </div>
  );
}
