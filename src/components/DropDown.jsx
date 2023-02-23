import React from "react";
import { Link } from "react-router-dom";
import CustomGoogleButton from "./CustomGoogleButton";
import Hamburger from "../assets/hamburger-menu.svg";

export default function DropDown() {
  function handleClick() {
    const dropdown = document.querySelector(".dropdown-menu");

    console.log(dropdown.attributes.display);
    dropdown.attributes.display = "block";
  }

  return (
    <div className="block md:hidden my-auto">
      <div className="pl-5">
        <div className="dropdown inline-block relative">
          <button
            onClick={handleClick}
            className="justify-center text-stone-100 items-center"
          >
            <img src={Hamburger} className="h-8" alt="" />
            {/* <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg> */}
          </button>
          <ul
            id="dropdown-nav-list"
            className="w-32 dropdown-menu absolute hidden text-stone-700 pt-1"
          >
            <li className="">
              <Link
                className="w-full rounded-t bg-stone-300 hover:bg-stone-400 py-2 px-4 block whitespace-no-wrap"
                to="/blogs"
              >
                Posts
              </Link>
            </li>
            <li className="">
              <Link
                className="w-full bg-stone-300 hover:bg-stone-400 py-2 px-4 block whitespace-no-wrap"
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li className="">
              <Link
                className="w-full bg-stone-300 hover:bg-stone-400 py-2 px-4 block whitespace-no-wrap"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
