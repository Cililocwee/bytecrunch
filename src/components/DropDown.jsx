import React from "react";
import { Link } from "react-router-dom";
import CustomGoogleButton from "./CustomGoogleButton";
import Hamburger from "../assets/hamburger-menu.svg";

export default function DropDown() {
  function handleClick() {
    const dropdown = document.querySelector(".dropdown-menu");
    const ddoverlay = document.getElementById("dropdown-overlay");

    console.log(dropdown.attributes.display);
    dropdown.classList.toggle("-translate-x-full");
  }

  return (
    <div className="block md:hidden my-auto">
      <div className="pl-5">
        <div className="dropdown inline-block">
          <div
            id="dropdown-overlay"
            className="flex transform transition duration 150 ease-out -translate-x-full backdrop-filter backdrop-blur-sm absolute top-0 left-0 mt-0 box-border w-full h-full "
          ></div>
          <button
            onClick={handleClick}
            className="z-20 justify-center text-stone-100 items-center"
          >
            <img src={Hamburger} className="h-8" alt="" />
          </button>
          <ul
            id="dropdown-nav-list"
            className="hidden bg-stone-300 top-0 left-0 w-56 h-full dropdown-menu absolute text-stone-700"
          >
            <li className="">
              <Link
                className="w-full mt-36 rounded-t bg-stone-300 hover:bg-stone-400 py-2 px-4 block whitespace-no-wrap"
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
