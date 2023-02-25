import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Blogs from "./components/Blogs";
import "./index.css";
import DetailedBlog from "./components/DetailedBlog";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import UpdateForm from "./components/UpdateForm";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";

const BlogPage = lazy(() => import("./components/Blogs"));

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
