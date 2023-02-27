import React from "react";
import { Link } from "react-router-dom";
import CustomGoogleButton from "./CustomGoogleButton";
export default function MobileNav() {
  return (
    <div className="relative sm:hidden">
      <ul className="bg-background-primary border-t-2 border-t-background-secondary flex fixed bottom-0 w-full h-16 items-center justify-evenly">
        <li>
          <Link to={"/"}>
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
        <li>
          <CustomGoogleButton />
        </li>
      </ul>
    </div>
  );
}
