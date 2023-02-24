import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import CustomGoogleButton from "./CustomGoogleButton";

export default function Navbar() {
  const [adminFlag, setAdminFlag] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user?.uid === import.meta.env.VITE_ADMIN_ID) {
      setAdminFlag(true);
    } else {
      setAdminFlag(false);
    }
  });

  return (
    <nav className="h-9 p-0 m-0 box-border justify-center sm:h-fit font-sans flex sm:justify-between text-center md:align-center md:flex-row md:text-left md:justify-center sm:py-4 sm:px-6 shadow md:items-center w-full">
      {adminFlag ? (
        <Link to={"/create"}>
          <div className="">
            <h1 className="mx-auto text-2xl font-bold">Corrie's Blog</h1>
            <p className="hidden sm:flex">
              Web development - one problem at a time
            </p>
          </div>
        </Link>
      ) : (
        <Link to={"/"}>
          <div className="">
            <h1 className="mx-auto text-2xl font-bold">Corrie's Blog</h1>
            <p className="hidden sm:flex">
              Web development - one problem at a time
            </p>
          </div>
        </Link>
      )}

      <div className="hidden sm:flex sm:gap-4 sm:items-center mx-auto sm:ml-auto sm:mr-0 md:gap-4 lg:gap-8">
        <Link
          to={"/"}
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Posts
        </Link>

        <Link
          to={"/about"}
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          About
        </Link>

        <Link
          to={"/contact"}
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Contact
        </Link>
        <CustomGoogleButton />
      </div>
    </nav>
  );
}
