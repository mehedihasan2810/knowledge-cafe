import React from "react";
import "./App.scss";
import FAQ from "./components/FAQ/FAQ";
import Navbar from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Blogs />
      <FAQ />
    </div>
  );
};

export default App;
