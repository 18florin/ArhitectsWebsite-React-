import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/index.js";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <div className="py-6 flex ml-20 mr-40 justify-between">
      <img src={Logo} alt="logo" />
      <div className="flex gap-4">
        <Link to="/">
          <div className={`${path === "/" ? "h-0.5 bg-black" : ""}`}></div>
          <div className="px-2">Home</div>
          <div className={`${path === "/" ? "h-0.5 bg-black" : ""}`}></div>
        </Link>
        <Link to="/gallery">
          <div
            className={`${path === "/gallery" ? "h-0.5 bg-black" : ""}`}
          ></div>
          <div className="px-2">Gallery</div>
          <div
            className={`${path === "/gallery" ? "h-0.5 bg-black" : ""}`}
          ></div>
        </Link>
        <Link to="/projects">
          <div
            className={`${path === "/projects" ? "h-0.5 bg-black" : ""}`}
          ></div>
          <div className="px-2">Projects</div>
          <div
            className={`${path === "/projects" ? "h-0.5 bg-black" : ""}`}
          ></div>
        </Link>
        <Link to="/certifications">
          <div
            className={`${path === "/certifications" ? "h-0.5 bg-black" : ""}`}
          ></div>
          <div className="px-2">Certifications</div>
          <div
            className={`${path === "/certifications" ? "h-0.5 bg-black" : ""}`}
          ></div>
        </Link>
        <Link to="/contacts">
          <div
            className={`${path === "/contacts" ? "h-0.5 bg-black" : ""}`}
          ></div>
          <div className="px-2">Contacts</div>
          <div
            className={`${path === "/contacts" ? "h-0.5 bg-black" : ""}`}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
