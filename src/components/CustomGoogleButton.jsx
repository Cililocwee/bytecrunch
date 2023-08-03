import React from "react";
import { auth, logout, signInWithGoogle } from "../../firebase";

export default function CustomGoogleButton({ adminFlag }) {
  async function handleClick() {
    if (auth.currentUser === null) {
      signInWithGoogle();
    } else {
      if (confirm("Log out?")) {
        logout().then(() => alert("Logged out..."));
      }
    }
  }

  return (
    <div className="text-center mt-auto mb-8">
      {adminFlag ? (
        <button onClick={handleClick}>Log Out</button>
      ) : (
        <button onClick={handleClick}>Log In</button>
      )}
    </div>
  );
}
