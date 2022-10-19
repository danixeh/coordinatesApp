import React from "react";
import footercs from "./footercs.css";
import Home from "../routes/Home";
const Footer = () => {
  return (
    <div className="home-footer">
      <div className="get-ready-bx">
        <div className="get-ready-bx-hd">
          <div className="get-ready-bx-bd">
            <p className="get-ready-p">Ready to talk? Join the Club!</p>
            <hr className="get-ready-hrr" />
            <p className="get-ready-pf">Jump on board and start a project</p>
          </div>
          <img className="get-ready-img" src="/footer_img.png" alt="" />
        </div>
      </div>
      <div className="footer-box">
        <div className="footer-hd">
          <div className="footer-lg">
            <img className="footer-img-lg" src="/Logo.png" alt="" />
            <p className="footer-lg-p">Creative Content.</p>
          </div>
          <div className="footer-imgs">
            <p className="footer-img-circle"></p>
            <p className="footer-img-circle"></p>
            <p className="footer-img-circle"></p>
          </div>
        </div>
        <div className="footer-bx-hr">
          <hr className="footer-hr" />
        </div>
        <div className="footer-more-info">
          <p className="footer-more-info-p">
            ©2022 Coordinates.co. All rights reserved.
          </p>
          <div className="footer-more-info-links">
            <h2 className="footer-more-info-d">About Us</h2>
            <h2 className="footer-more-info-d">Privacy</h2>
            <h2 className="footer-more-info-d">Contact</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
