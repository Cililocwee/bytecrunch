import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Blogs from "./components/Blogs";
import "./index.css";
import DetailedBlog from "./components/DetailedBlog";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import UpdateForm from "./components/UpdateForm";
import FloatingCreate from "./components/FloatingCreate";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (err) => console.log("Login failed: ", err),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      googleLogout();
      setProfile(null);
      setUser(null);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <Navbar
          username={profile !== null ? profile.name.split(" ")[0] : undefined}
          login={login}
          logout={logOut}
        />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<Create />} />
          <Route
            path="/blog/:id"
            element={<DetailedBlog profile={profile} />}
          />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
        {profile?.id === import.meta.env.VITE_ADMIN_ID ? (
          <FloatingCreate />
        ) : (
          ""
        )}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
