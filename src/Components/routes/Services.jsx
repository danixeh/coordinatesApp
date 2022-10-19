import React from "react";
import { useState } from "react";
import "../../App.css";
import webProjects from "../../Projects";
import homeDetail from "../Home/Home.css";
// import { useDispatch } from "react-redux";
// import { project } from "../../store/slices/projects.slice";
import { useEffect } from "react";
import Projects from "../Home/Projects";
import areas from "../../areas";
import Areas from "../Home/Areas";
import clientsDB from "../../data/clientsdb";
import partnersDB from "../../data/partnersdb";
import Clients from "../Home/Clients";
import OurPartners from "../Home/OurPartners";
import servicescs from "../services/servicescs.css";

const Services = () => {
  // const dispatch = useDispatch();
  // const putProjectsOn = () => dispatch(setGetProjectsOn(webProjects));
  const [relevantProjects, setRelevantProjects] = useState();
  useEffect(() => {
    if (webProjects) {
      const proFilter = webProjects.filter(
        (proRelevance) => proRelevance.relevance === true
      );
      setRelevantProjects(proFilter);
    }
  }, []);
  return (
    <div className="home services-bd">
      <img className="home-img-one" src="/circles1.svg" alt="" />
      <img className="home-img-two" src="/circles2.svg" alt="" />

      <div className="home-mn-dummy-bx">
        <h2 className="home-mnn-h">Services</h2>
        <p className="home-p-dummy">
          Our team provide a wide range of services and specialize in different
          areas.
        </p>
      </div>
      <img className="home-img-three-ss" src="/circles4.svg" alt="" />
      <div className="home-ft-areas-ss">
        <img className="img-ss" src="/circles3.svg" alt="" />
      </div>
      <div className="foot-bd-brands"></div>
    </div>
  );
};

export default Services;
