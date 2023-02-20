import React from "react";
import { Link } from "react-router-dom";
import { logout, signInWithGoogle } from "../../firebase";

export default function DropDown() {
  return (
    <div className="block  md:hidden my-auto">
      <div className="pl-10">
        <div className="dropdown inline-block relative">
          <button className="bg-stone-400 text-stone-100 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1 w-16">Menu</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="w-full dropdown-menu absolute hidden text-stone-700 pt-1">
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
                to="/aboutme"
              >
                About Me
              </Link>
            </li>

            <li className="">
              {" "}
              <button
                onClick={signInWithGoogle}
                className="w-full rounded-b bg-stone-300 hover:bg-stone-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Log In
              </button>
              <button
                onClick={logout}
                className="w-full rounded-b bg-stone-300 hover:bg-stone-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Log Out
              </button>
              {/* {profile ? (
                <button
                  onClick={logout}
                  className="w-full rounded-b bg-stone-300 hover:bg-stone-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={login}
                  className="w-full rounded-b bg-stone-300 hover:bg-stone-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Log In
                </button>
              )} */}
            </li>
            <li className=""></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
