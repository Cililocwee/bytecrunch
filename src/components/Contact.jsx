import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Portfolio from "../assets/portfolio.svg";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="m-auto max-w-md px-8 flex flex-col text-center align-items-center pt-3 pb-16 lg:pt-8 lg:pb-24">
      <h1 className="text-2xl font-bold mb-4">Looking to connect?</h1>
      <p className="mb-2">Look no further! </p>
      <p>You can reach me through my socials!: </p>
      <ul className="flex w-full justify-evenly my-4">
        <li>
          <Link to={"https://www.github.com/cililocwee"}>
            <img src={Github} alt="Github" className="h-12" />
          </Link>
        </li>
        <li>
          <Link to={"https://www.linkedin.com/in/corriestroup/"}>
            <img src={Linkedin} alt="Linkedin" className="h-12" />
          </Link>
        </li>
        <li>
          <Link to={"https://corrie-stroup.web.app"}>
            <img src={Portfolio} alt="Portfolio" className="h-12" />
          </Link>
        </li>
      </ul>
      <p>
        Whether you have a project in mind, a question to ask, or just want to
        say hello, I'm always happy to hear from fellow developers and
        enthusiasts. So don't hesitate to drop me a line and let's connect!
      </p>
    </div>
  );
}
