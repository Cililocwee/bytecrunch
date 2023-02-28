import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import "./index.css";
import ProgrammingSplash from "./assets/programming.jpg";
// import FlowingCircuit from "./assets/flowingcircuit.svg";
import FlowingCircuit from "./flowingcircuit/FlowingCircuit";
import { Parallax } from "react-parallax";

const Create = lazy(() => import("./pages/Create"));
const Blogs = lazy(() => import("./pages/Blogs"));
const DetailedBlog = lazy(() => import("./pages/DetailedBlog"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const UpdateForm = lazy(() => import("./pages/UpdateForm"));
const Contact = lazy(() => import("./pages/Contact"));

// bg-[url('./assets/mountain_ukiyoe_medium.jpg')] bg-bottom bg-cover

function App() {
  return (
    <div className="App bg-gray-800 h-full min-h-screen relative flex flex-col justify-between overflow-hidden">
      <Router>
        <ScrollToTop />
        <Navbar />
        {/* Parallax this */}
        <div className="z-20 h-fit max-h-[400px] bg-white overflow-hidden">
          <img
            src={ProgrammingSplash}
            alt="programming"
            className="object-cover w-full object-center"
          />
        </div>
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
        <FlowingCircuit />
        {/* <img src={FlowingCircuit} alt="" /> */}
      </Router>
    </div>
  );
}

export default App;
