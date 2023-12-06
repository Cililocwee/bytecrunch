import React, { useState } from "react";
import { auth, logout, signInWithGoogle } from "../../firebase";

export default function CustomGoogleButton() {
  async function handleClick() {
    let admin = auth.currentUser?.uid == import.meta.env.VITE_ADMIN_ID;

    if (admin) {
      if (confirm("Do you want to log out?")) {
        logout().then(() => alert("You've been logged out."));
      }
    } else {
      signInWithGoogle();
    }
  }

  return (
    <div className="text-center mt-auto mb-8">
      {auth.currentUser?.uid == import.meta.env.VITE_ADMIN_ID ? (
        <button onClick={handleClick}>Log Out</button>
      ) : (
        <button onClick={handleClick}>Log In</button>
      )}
    </div>
  );
}
