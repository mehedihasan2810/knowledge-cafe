import React from "react";
import "./App.scss";
import Blogs from "./components/blogs/blogs";
import FAQ from "./components/FAQ/FAQ";
import Navbar from "./components/Navbar/Header";
const App = () => {
  return (
    <div>
     <Navbar/>
     <Blogs/>
     <FAQ/>
    </div>
  )
};

export default App;
