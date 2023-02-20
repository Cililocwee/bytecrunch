import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import DropDown from "./DropDown";

export default function Navbar({ username, login, logout }) {
  const greeting = ["Howdy", "Hi there", "Welcome", "Greetings", "Hello"];
  const [userGreeting, setUserGreeting] = useState("");

  useEffect(() => {
    setUserGreeting(randomGreeting());
  }, []);

  function randomGreeting() {
    return greeting[Math.floor(Math.random() * greeting.length)];
  }

  return (
    <nav className="font-sans flex justify-between text-center sm:align-center sm:flex-row sm:text-left sm:justify-center py-4 px-6 shadow sm:items-center w-full">
      <Link to={"/"}>
        <div className="">
          <h1 className="text-2xl font-bold">Corrie's Blog</h1>
          <p className="">Web development - one problem at a time</p>
        </div>
      </Link>

      <div className="hidden sm:flex sm:items-center mx-auto sm:ml-auto sm:mr-0 gap-4 md:gap-8">
        <Link
          to={"/blogs"}
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Posts
        </Link>

        <Link
          to={"/aboutme"}
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          About
        </Link>

        <Link
          to="https://github.com/Cililocwee"
          className="flex h-8 w-8 hover:scale-110 duration-500 ease-in-out"
        >
          <img className="h-8" src={Github} alt="" />
        </Link>

        <Link
          to="https://www.linkedin.com/in/corriestroup/"
          className="flex h-8 w-8 hover:scale-110 duration-500 ease-in-out"
        >
          <img className="h-8 w-8 shrink-0" src={Linkedin} alt="" />
        </Link>
        <div>
          {username ? (
            <button
              onClick={logout}
              className="w-40 peer px-3 py-2 bg-stone-500 hover:bg-stone-700 text-stone-200"
            >
              {`${userGreeting}, ${username}`}
              <br />
              Click here to log out
            </button>
          ) : (
            <button
              onClick={() => login()}
              className="w-40 peer px-3 py-2 bg-stone-500 hover:bg-stone-700 text-stone-200"
            >
              Click here to sign in and comment
            </button>
          )}
        </div>
      </div>
      {/* TODO: Update dropdown menu! */}
      <DropDown
        login={() => login()}
        logout={logout}
        profile={username ? true : false}
      />
    </nav>
  );
}
