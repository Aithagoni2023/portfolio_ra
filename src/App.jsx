import { Routes, Route } from "react-router-dom";
import Home from "./components//Home.jsx";
import Projects from "./pages/Projects";
import Contact from "./components/Contact.jsx";
import Navigation from "./components/Navigation.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#2c3e50] text-[#ecf0f1]">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

/*
Add images to public folder
Update social media links
Add actual project data
Add your own profile image
*/
