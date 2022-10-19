import React, { useState } from "react";
import "../../App.css";
import webProjects from "../../Projects";
import homeDetail from "../Home/Home.css";
// import { useDispatch } from "react-redux";
// import { project } from "../../store/slices/projects.slice";
import { useEffect } from "react";
import Projects from "../../Components/Home/Projects";
import areas from "../../areas";
import Areas from "../../Components/Home/Areas";
import clientsDB from "../../data/clientsdb";
import partnersDB from "../../data/partnersdb";
import Clients from "../Home/Clients";
import OurPartners from "../Home/OurPartners";
import { NavLink } from "react-router-dom";
import animate from "animate.css";

const Home = () => {
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

  console.log(relevantProjects);

  return (
    <div className="home">
      <h1 className="title ">
        We Help Brands & Businesses Create Great Content
      </h1>
      <h2 className="animate__pulse home-title-two">
        We combine Technology, Design and Art to build products, create content
        and more
      </h2>
      <NavLink
        to="/media"
        onClick={() => window.scrollTo(0, 0)}
        className="home-bt-hd-dummy shadow"
      >
        See Our Work
      </NavLink>
      <img className="home-img-one" src="/circles1.svg" alt="" />
      <img className="home-img-two" src="/circles2.svg" alt="" />
      {/* <img className="home-img-three" src="/circles3.svg" alt="" />
      <img className="home-img-four" src="/circles4.svg" alt="" /> */}
      <div className="relevant-projects">
        {relevantProjects?.map((webProject) => (
          <Projects key={webProject.id} webProject={webProject} />
        ))}
      </div>
      <button className="home-btnb-dummy">See More</button>
      <div className="home-mn-dummy">
        <div className="home-bd-dummy">
          <img className="home-img-dummy" src="/dummy_img.png" alt="" />
          <div className="home-ft-dummy">
            <h2 className="home-t-dummy">A line to attract Dummies</h2>
            <h3 className="home-ttwo-dummy">
              A dummy proof text about us or our services ?….
            </h3>
            <button className="home-btn-dummy">Learn More</button>
          </div>
        </div>
        <img className="home-img-three" src="/circles4.svg" alt="" />
      </div>
      <div className="home-ft-areas">
        <img className="ft-img" src="/circles3.svg" alt="" />
        <div className="relevant-areas">
          <div className="relevant-areas-bd">
            <h1 className="relevant-areas-hd">Main Areas</h1>
            <p className="relevant-areas-p">
              Our team provide a wide range of services and specialize in
              different areas.
            </p>
          </div>
          {areas?.map((area) => (
            <Areas key={area.id} area={area} />
          ))}
        </div>
      </div>
      <div className="foot-bd-brands">
        <button className="home-btn-ft-dummy">More Areas</button>
        <div className="foot-hd-brands">
          <h2 className="foot-t-partners">Partners</h2>
          <p className="foot-p-partners">
            Our team provide a wide range of services and specialize in
            different areas.
          </p>
          <div className="foot-m-partners">
            {partnersDB?.map((partner) => (
              <OurPartners key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
        <div className="foot-ft-brands">
          <h2 className="foot-t-title">Clients</h2>
          <p className="foot-t-p">
            Our team provide a wide range of services and specialize in
            different areas.
          </p>
          <div className="foot-b-m">
            {clientsDB?.map((client) => (
              <Clients key={client.id} client={client} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
