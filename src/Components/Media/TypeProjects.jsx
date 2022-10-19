import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import webProjects from "../../Projects";
import HomDetail from "../Home/Home.css";

const TypeProjects = ({ webProject }) => {
  return (
    <div>
      <img className="project-media-img" src={webProject.img} alt="" />
    </div>
  );
};

export default TypeProjects;
