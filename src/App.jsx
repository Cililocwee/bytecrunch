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
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function App() {
  const [profile, setProfile] = useState(null);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("Guest");
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    fetchUserName();
    console.log(auth);
    console.log("Fetch");
  }, [user, loading]);

  function login() {
    return;
  }

  function logOut() {
    return;
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <Navbar
          username={profile !== null ? profile.name.split(" ")[0] : undefined}
          login={login}
          logout={logOut}
        />
        {/* <p>{`Logged in as ${name} - ${user?.email}`}</p> */}
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<Create user={profile} />} />
          <Route
            path="/blog/:id"
            element={<DetailedBlog profile={profile} />}
          />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/update/:id" element={<UpdateForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
