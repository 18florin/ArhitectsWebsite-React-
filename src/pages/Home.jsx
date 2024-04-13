import {
  Hero,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Img1,
  Img2,
  Img3,
  Contact,
} from "../assets/index";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="xl:mx-40 md:mx-20 mx-10 min-h-screen">
      <div className="flex justify-between">
        <div className="flex flex-col leading-[100px] justify-center">
          <span className="text-[140px] text-gray-400 uppercase mb-10">
            Project
          </span>
          <span className="font-bold text-[100px]">Lorum</span>
        </div>
        <div className="relative">
          <img src={Hero} alt="hero" />
          <button className="absolute left-0 bottom-0 z-10 bg-white px-4 py-4 flex items-center">
            VIEW PROJECT
            <span className="ml-4">
              {" "}
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="mx-20 flex my-40 items-center justify-center">
        <div className="">
          <img src={Img1} className="my-8" />
          <img src={Img3} />
        </div>
        <div className="flex items-center">
          <img src={Img2} className="mx-8" />
        </div>
        <div className="">
          <h1 className="text-8xl text-gray-400">About</h1>
          <p className="max-w-[500px] my-8">
            At Visionary Designs, our philosophy is rooted in the belief that
            architecture has the power to positively impact lives. With a
            multidisciplinary team of architects, designers, and engineers, we
            approach every project with a commitment to excellence and a passion
            for pushing the boundaries of design. Our portfolio encompasses a
            diverse range of projects, including residential developments,
            commercial buildings, educational facilities, cultural landmarks,
            and urban revitalization initiatives. Whether it's crafting a
            sustainable skyscraper or restoring a historic landmark, we strive
            to balance aesthetic appeal with functional efficiency, always
            mindful of the unique needs and aspirations of our clients.
          </p>
          <button className="bg-[#333333] text-white flex items-center px-10 py-6">
            READ MORE{" "}
            <span className="ml-4">
              {" "}
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="mx-10 lg:mx-40">
        <h1 className="lg:text-[80px] text-gray-400 mb-20 text-[40px]">
          Main Focus/Mission Statement
        </h1>
        <div className="flex justify-between lg:mr-40">
          <p className="max-w-[240px]">
            Envision Tomorrow: We aim to lead the way in envisioning the future
            of architecture. Through forward-thinking design concepts and a
            commitment to pushing the boundaries of creativity, we strive to
            create spaces that anticipate the needs of tomorrow's world.
          </p>
          <p className="max-w-[240px]">
            Empower Communities: We believe in the power of architecture to
            empower communities. By actively engaging with stakeholders and
            embracing a collaborative approach, we seek to create inclusive
            spaces that foster social interaction, cultural exchange, and
            economic vitality.
          </p>
        </div>
      </div>
      <div className="my-40 flex flex-col">
        <div className="mx-auto">
          <h1 className="md:text-[80px] text-gray-400 mb-20 text-[50px] whitespace-nowrap">
            Our Projects
          </h1>
          <div className="flex flex-wrap gap-8 max-w-[1200px] justify-center">
            <img src={Project1} />
            <img src={Project2} />
            <img src={Project3} />
            <img src={Project4} />
            <img src={Project5} />
          </div>
          <div className="flex justify-end mt-16">
            <button className=" bg-[#333333] px-10 py-6 text-white flex items-center">
              ALL PROJECTS
              <span className="ml-4">
                {" "}
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-40 xl:mx-40">
        <div className="flex items-center justify-between mb-20">
          <div className="flex flex-col gap-6">
            <h1 className="xl:text-[80px] text-gray-400 text-[40px] whitespace-nowrap">
              Contact Us
            </h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Interested In" />
            <input type="text" placeholder="Message" />
          </div>
          <div className="mt-40 hidden min-w-[400px] md:inline">
            <img src={Contact} />
          </div>
        </div>
        <div className="flex items-center justify-start">
          <button className="px-10 py-6 bg-[#333333] text-white flex items-center">
            SEND EMAIL{" "}
            <span className="ml-4">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
