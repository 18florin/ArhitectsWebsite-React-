import React from "react";

const Contacts = () => {
  return (
    <div className="min-h-screen mx-40 flex gap-20">
      <div>
        <h1 className="text-gray-400 text-8xl mt-20">Contact</h1>
        <h1 className="text-black font-bold text-8xl mb-20">Information</h1>
        <h3 className="font-bold">Company Name</h3>
        <p>Visionary Designs</p>
        <h3 className="my-10 font-bold">0748 453 920</h3>
        <p>florin.untaru@yahoo.com</p>
        <button className="flex items-center bg-[#333333] px-10 py-6 text-white mt-10">
          CONTACT US
        </button>
      </div>
      <div className="w-full mt-20">
        <div>
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Calea%20Bucure%C8%99ti%2027%20200678%20Craiova+(Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
