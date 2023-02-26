import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import "./index.css";

const Create = lazy(() => import("./components/Create"));
const Blogs = lazy(() => import("./components/Blogs"));
const DetailedBlog = lazy(() => import("./components/DetailedBlog"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const UpdateForm = lazy(() => import("./components/UpdateForm"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blog/:id" element={<DetailedBlog />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/update/:id" element={<UpdateForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Blogs />} />
          </Routes>
        </Suspense>
        <MobileNav />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
