import Logo2 from "../assets/logo2.png";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2C2C2C]">
      <div className="lg:flex lg:flex-wrap grid grid-cols-2 gap-10 text-white lg:justify-between py-16 px-10 lg:px-20 xl:px-40">
        <div className="">
          <img src={Logo2} />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">Information</h3>
          <a href="">
            <h3>Main</h3>
          </a>
          <a href="">
            <h3>Gallery</h3>
          </a>
          <a href="">
            <h3>Projects</h3>
          </a>
          <a href="">
            <h3>Certifications</h3>
          </a>
          <a href="">
            <h3>Contacts</h3>
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">Contacts</h3>
          <div className="flex gap-2 sm:flex-col sm:justify-between h-full">
            <a href="https://www.google.com/maps/dir/44.3219968,23.7993984/Bloc+17B,+Calea+Bucure%C8%99ti+27,+Craiova+200678/@44.3215883,23.7965385,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4752d70aca824b15:0x79150642db43300c!2m2!1d23.8012902!2d44.3202285?entry=ttu">
              <div className="flex gap-2 items-center max-w-[200px]">
                <IoLocationOutline className="text-lg sm:text-4xl" />
                <h3 className="hidden sm:inline">
                  Calea Bucuresti Nr. 27, Bloc 17B, scara 1, ap. 8
                </h3>
              </div>
            </a>
            <a href="">
              <div className="flex items-center gap-2">
                <BsTelephone />
                <h3 className="hidden sm:inline">0748 453 920</h3>
              </div>
            </a>
            <a href="">
              <div className="flex gap-2 items-center">
                <MdOutlineEmail />
                <h3 className="hidden sm:inline">florin.untaru@yahoo.com</h3>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-6 whitespace-nowrap">Social Media</h3>
          <div className="flex md:gap-6 gap-2">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-500"></div>
      <div className="flex justify-center py-10">
        <p className="text-gray-500">© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
