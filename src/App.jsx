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
import { auth } from "../firebase";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog/:id" element={<DetailedBlog />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
        {auth.currentUser !== null &&
        auth.currentUser.uid === import.meta.env.VITE_ADMIN_ID ? (
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
