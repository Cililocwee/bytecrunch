import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import DropDown from "./DropDown";
import { logout, signInWithGoogle } from "../../firebase";

export default function Navbar({}) {
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
      </div>

      <DropDown login={signInWithGoogle} logout={logout} />
      <button className="hidden sm:flex" onClick={signInWithGoogle}>
        Login
      </button>
      <button className="hidden sm:flex" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}
