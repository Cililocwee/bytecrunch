import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import "./index.css";
import Ukiyoe from "./assets/mountain_ukiyoe_medium.jpg";

const Create = lazy(() => import("./pages/Create"));
const Blogs = lazy(() => import("./pages/Blogs"));
const DetailedBlog = lazy(() => import("./pages/DetailedBlog"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const UpdateForm = lazy(() => import("./pages/UpdateForm"));
const Contact = lazy(() => import("./pages/Contact"));

// bg-[url('./assets/mountain_ukiyoe_medium.jpg')] bg-bottom bg-cover

function App() {
  return (
    <div className="h-full min-h-screen bg-[url('./assets/mountain_ukiyoe_medium.jpg')] bg-bottom bg-cover relative bg-red-200 flex flex-col justify-between">
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
