import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import webProjects from "../../Projects";
import HomDetail from "../Home/Home.css";

const Projects = ({ webProject }) => {
  return (
    <div className="/img-pj increase">
      <img src={webProject.img} alt="" />
    </div>
  );
};

export default Projects;
