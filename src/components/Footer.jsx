import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center pb-5">
      <p className="">
        © Corrie Stroup, 2023 |{" "}
        <a href="mailto:corrie.stroup@gmail.com" className="underline">
          corrie.stroup@gmail.com
        </a>{" "}
      </p>
      <div className="flex pt-1">
        <Link to="http://google.com">
          <img className="h-10 mx-2 mt-1" src={Github} alt="" />
        </Link>
        <Link to="http://google.com">
          <img className="h-10 mx-2 mt-1" src={Linkedin} alt="" />
        </Link>
      </div>
    </div>
  );
}
