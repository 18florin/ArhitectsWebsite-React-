import React from "react";
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
} from "../assets/index.js";

const Gallery = () => {
  return (
    <div className="min-h-screen mx-60">
      <h1 className="text-gray-400 text-8xl mt-20">Photo</h1>
      <h1 className="text-black font-bold text-8xl mb-20">Gallery</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        <img src={Gallery1} alt="" />
        <img src={Gallery2} alt="" />
        <img src={Gallery3} alt="" />
        <img src={Gallery4} alt="" />
        <img src={Gallery5} alt="" />
        <img src={Gallery6} alt="" />
        <img src={Gallery7} alt="" />
        <img src={Gallery8} alt="" />
        <img src={Gallery9} alt="" />
        <img src={Gallery10} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
