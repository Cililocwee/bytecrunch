import React from "react";
import { Link } from "react-router-dom";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import DropDown from "./DropDown";
import CustomGoogleButton from "./CustomGoogleButton";

export default function Navbar({}) {
  return (
    <nav className="font-sans flex justify-between text-center md:align-center md:flex-row md:text-left md:justify-center py-4 px-6 shadow md:items-center w-full">
      <Link to={"/"}>
        <div className="">
          <h1 className="text-2xl font-bold">Corrie's Blog</h1>
          <p className="">Web development - one problem at a time</p>
        </div>
      </Link>

      <div className="hidden md:flex sm:items-center mx-auto sm:ml-auto sm:mr-0 md:gap-4 lg:gap-8">
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

        <CustomGoogleButton />
      </div>

      <DropDown />
    </nav>
  );
}
