import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const About = () => { 
  return(
    <div
      name="about"
      id="about"
      //#0a192f old bg color
      className="w-full h-screen sm:pt-20 font-sans bg-gradient-to-l from-gray-700 via-gray-900 to-black text-black flex"
    >
      <div className="flex flex-col  justify-center items-center w-full lg:h-full">
        <div className=" rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-4 mb-4">
            <div className="sm:text-right  pl-4">
              <p attribute_name="about" className="text-4xl md:text-5xl animate-wiggle font-bold inline border-b-4 text-white border-cyan-500 xl:text-7xl">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4 py-4">
            <div className="text-white md:text-4xl xl:text-6xl font-bold xsm:text-2xl animate-pulse">
              <p>
                Hi. I'm MUSAIB ZAHOOR, nice to meet you. Do take a
                look around.
              </p>
            </div>
            <div>
              <p className="md:text-xl sm:text-xl text-gray-900 xl:text-3xl">
                {" "}
                A software developer with experience in building Responsive and
                Scalable Web apps. I am well-knowledged in UI/UX principles and
                practices. In addition to software development, I love to work with computer systems, hardware and other tools.
              </p>
            </div>
            
          </div>
          
        </div>
        <div className="py-8">
              <h2 className="text-white animate-typing xsm:text-xl overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl text-white font-bold">
                Connect with me on Social Media
              </h2>
              <p className="text-white">
                <FaArrowLeft size={30} />
              </p>
            </div>
      </div>
    </div>
  );
};
export default About;