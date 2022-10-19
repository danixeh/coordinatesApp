import { useForm } from "react-hook-form";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Admin from "./Components/routes/Admin";
import Contact from "./Components/routes/Contact";
import Home from "./Components/routes/Home";
import Login from "./Components/routes/Login";
import Media from "./Components/routes/Media";
import Partners from "./Components/routes/Partners";
import ProtectedRoutes from "./Components/routes/ProtectedRoutes";
import Services from "./Components/routes/Services";

import Projects from "../src/Components/Home/Projects";
import { useDispatch } from "react-redux";
import webProjects from "../src/Projects";
import { useEffect, useState } from "react";
import { setProjects } from "../src/store/slices/projects.slice";
import Footer from "./Components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  // const putProjectsOn = () => dispatch(setProjects(webProjects));
  useEffect(() => {
    if (webProjects) {
      dispatch(setProjects(webProjects));
    }
  }, []);

  console.log(webProjects);

  // console.log(webProjects);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
