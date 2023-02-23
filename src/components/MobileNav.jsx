import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <div className="relative sm:hidden">
      <ul className="flex fixed bottom-0 w-full h-16 items-center justify-evenly bg-stone-400">
        <li>
          <Link to={"/blogs"}>
            <h2 className="text-xl font-bold">Blogs</h2>
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <h2 className="text-xl font-bold">About</h2>
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            <h2 className="text-xl font-bold">Contact</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}
