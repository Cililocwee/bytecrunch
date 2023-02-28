import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-background-primary pb-20 text-sm sm:text-base mx-auto flex flex-col items-center justify-center sm:pb-5 pt-5 sm:pt-5 w-full box-border">
      <p className="">
        © Corrie Stroup, 2023 |{" "}
        <a href="mailto:corrie.stroup@gmail.com" className="underline">
          corrie.stroup@gmail.com
        </a>{" "}
      </p>
    </div>
  );
}
