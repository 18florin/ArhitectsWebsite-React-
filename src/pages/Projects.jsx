import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SampleProject1, SampleProject2, SampleProject3 } from "../assets";

const Projects = () => {
  return (
    <div className="min-h-screen mx-60">
      <h1 className="text-gray-400 text-8xl mt-20">Out</h1>
      <h1 className="text-black font-bold text-8xl mb-20">Projects</h1>
      <div className="flex">
        <img src={SampleProject1} className="mr-10" />
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="text-gray-400 text-3xl">Sample Project 1</h1>
          <p>
            Our project aims to redefine urban living by creating a sustainable
            residential complex that seamlessly integrates with the surrounding
            environment while prioritizing the well-being of its residents.
            Located in the heart of the city, the complex is designed to offer a
            harmonious blend of modern convenience and natural tranquility. The
            architectural concept revolves around three key principles:
            sustainability, community, and connectivity. The design incorporates
            passive solar techniques, green roofs, and rainwater harvesting
            systems to minimize environmental impact and promote energy
            efficiency. Recycled materials and locally sourced resources are
            utilized throughout the construction process, further reducing
            carbon footprint.
          </p>
          <button className="flex items-center bg-[#333333] px-10 py-6 text-white">
            VIEW MORE{" "}
            <span className="ml-4">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="flex my-40">
        <img src={SampleProject2} className="mr-10" />
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="text-gray-400 text-3xl">Sample Project 2</h1>
          <p>
            Emphasizing the importance of community, the complex features
            communal spaces such as rooftop gardens, shared courtyards, and
            multipurpose recreational areas. These spaces encourage social
            interaction, fostering a sense of belonging and camaraderie among
            residents. Additionally, dedicated areas for urban agriculture and
            community workshops promote self-sufficiency and skill-sharing
            within the neighborhood. Connectivity is enhanced through
            pedestrian-friendly pathways, bike lanes, and public transportation
            access points integrated into the design. The complex is
            strategically located near public amenities such as schools, parks,
            and shopping centers, encouraging residents to embrace a car-free
            lifestyle and reducing reliance on fossil fuels.
          </p>
          <button className="flex items-center bg-[#333333] px-10 py-6 text-white">
            VIEW MORE{" "}
            <span className="ml-4">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="flex mb-40">
        <img src={SampleProject3} className="mr-10" />
        <div className="flex flex-col justify-evenly items-start">
          <h1 className="text-gray-400 text-3xl">Sample Project 3</h1>
          <p>
            The residential units themselves are designed with flexibility and
            comfort in mind, offering a variety of floor plans to accommodate
            diverse lifestyles and family sizes. Natural light and ventilation
            are maximized, creating bright and airy living spaces that promote
            health and well-being. Each unit also features smart technologies
            for energy monitoring and optimization, empowering residents to live
            more sustainably. In summary, our architectural project aims to set
            a new standard for urban living by prioritizing sustainability,
            community, and connectivity. By embracing these principles, we
            aspire to create a vibrant and inclusive residential complex that
            enriches the lives of its residents while preserving the planet for
            future generations.
          </p>
          <button className="flex items-center bg-[#333333] px-10 py-6 text-white">
            VIEW MORE{" "}
            <span className="ml-4">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
