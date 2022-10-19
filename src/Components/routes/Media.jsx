import React, { useState } from "react";
import webProjects from "../../Projects";
import { useEffect } from "react";
import Projects from "../../Components/Home/Projects";
import TypeProjects from "../Media/TypeProjects";
import mediacs from "../Media/mediacs.css";

const Media = () => {
  const [typeProjects, setTypeProjects] = useState("films");
  const [filterProjects, setFilterProjects] = useState();

  const findTypeProject = () => {
    if (webProjects) {
      const proFilter = webProjects.filter(
        (proRelevance) => proRelevance.type === typeProjects
      );
      console.log(proFilter);
      setFilterProjects(proFilter);
    }
  };

  useEffect(() => {
    if (typeProjects === "all") {
      setFilterProjects(webProjects);
    } else {
      findTypeProject();
    }
  }, [typeProjects]);

  console.log(filterProjects);

  const trailersProjects = () => {
    setTypeProjects("trailers");
  };

  const filmsProjects = () => {
    setTypeProjects("films");
  };

  const adsProjects = () => {
    setTypeProjects("ads");
  };

  const animationsProjects = () => {
    setTypeProjects("animation");
  };

  const brandingProjects = () => {
    setTypeProjects("branding");
  };
  const vfxProjects = () => {
    setTypeProjects("vfx");
  };
  const allProjects = () => {
    setTypeProjects("all");
  };

  return (
    <div className="home services-bd">
      <img className="media-img-one" src="/circles1.svg" alt="" />
      <img className="media-img-two" src="/circles2.svg" alt="" />
      <div className="home-mn-dummy-bx-mda">
        <h2 className="media-mnn-h">Media</h2>
        <p className="media-p-dummy">
          Our team provide a wide range of services and specialize in different
          areas.
        </p>
      </div>
      <div className="media-bts-body">
        <div className="media-bts-box">
          <button
            className={typeProjects === "trailers" ? "mda" : " media-bts-bt"}
            onMouseOver={trailersProjects}
          >
            Trailers
          </button>
          <button
            className={typeProjects === "films" ? "mda" : "media-bts-bt"}
            onMouseOver={filmsProjects}
          >
            Films
          </button>
          <button
            className={typeProjects === "ads" ? "mda" : "media-bts-bt"}
            onMouseOver={adsProjects}
          >
            Ads
          </button>
          <button
            className={typeProjects === "animation" ? "mda" : "media-bts-bt"}
            onMouseOver={animationsProjects}
          >
            3D Animations
          </button>
          <button
            className={typeProjects === "branding" ? "mda" : "media-bts-bt"}
            onMouseOver={brandingProjects}
          >
            Branding
          </button>
          <button
            className={typeProjects === "vfx" ? "mda" : "media-bts-bt"}
            onMouseOver={vfxProjects}
          >
            VFX
          </button>
          <button
            className={typeProjects === "all" ? "mda" : "media-bts-bt"}
            onMouseOver={allProjects}
          >
            All Projects
          </button>
        </div>
      </div>
      <div className="relevant-projects-mda">
        <div className="relevant-projects-mda">
          {filterProjects?.map((filterProject) => (
            <Projects key={filterProject.id} webProject={filterProject} />
          ))}
        </div>
        <img className="img-media" src="/circles3.svg" alt="" />
      </div>
      <div className="foot-bd-brands"></div>
    </div>
  );
};

export default Media;
