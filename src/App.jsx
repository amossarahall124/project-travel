import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homes from "./pages/Homes";
import Blogs from "./pages/Blogs";
import Places from "./pages/Places";
import BlogsInfor from "./pages/BlogsInfor";


function App() {
  return (
    <div>
      < Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsInfor />} />
          <Route path="/Places" element={<Places />} />
        </Routes>
        {/* <Footer /> */}
      </Router >
    </div >
  );
}

export default App;