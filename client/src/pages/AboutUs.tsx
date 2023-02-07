import React from "react";

import { FiTarget } from "react-icons/fi";
import { FaServicestack } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";

const members = [
  {
    id: 0,
    name: "Vicky Gupta",
    education: "B.Tech CSE",
    url: 0,
    linkedInUrl: "https://www.linkedin.com/in/vicky-gupta-61a418175/",
    githubUrl: "https://github.com/Vicky-Guptaa",
    facebookUrl: "https://www.facebook.com/",
  },
  {
    id: 1,
    name: "Mohd Haider",
    education: "B.Tech CSE",
    url: 0,
    linkedInUrl: "",
    githubUrl: "",
    facebookUrl: "https://www.facebook.com/",
  },
  {
    id: 2,
    name: "Mohd Shadab",
    education: "B.Tech CSE",
    url: 0,
    linkedInUrl: "",
    githubUrl: "",
    facebookUrl: "https://www.facebook.com/",
  },
  {
    id: 3,
    name: "Himanshu Rajput",
    education: "B.Tech CSE",
    url: 0,
    linkedInUrl: "",
    githubUrl: "",
    facebookUrl: "https://www.facebook.com/",
  },
];

const AboutUs = () => {
  // const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const allMembers = members.map((member) => {
    return (
      <div
        className=" bg-[color:var(--main-color)] mx-6 mb-12 shadow-[0px_0px_10px_rgba(0,0,0,0.4)] rounded-xl overflow-hidden hover:-translate-y-4 duration-700"
        key={member.id}
      >
        <div className=" border-8 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] rounded-br-[90px] overflow-hidden">
          <img
            // src={0}
            className="w-56 h-64 object-cover object-top hover:scale-125 duration-[6s] ease-linear"
            alt=""
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-left text-[color:var(--tertiary-text-color)] font-bold tracking-wider">
            {member.name.toUpperCase()}
          </h3>
          <h4 className="text-left mt-1 text-[color:var(--color-primary)] text-md font-bold">
            {member.education}
          </h4>
          <div className="flex mt-4 gap-4 text-lg text-[color:var(--tertiary-text-color)]">
            <a href={member.facebookUrl} target="_blank" rel="noreferrer">
              <BsFacebook className="hover:text-[color:var(--color-primary)] hover:scale-110 duration-300  ease-in-out" />
            </a>
            <a href={member.linkedInUrl} target="_blank" rel="noreferrer">
              <BsLinkedin className="hover:text-[color:var(--color-primary)] hover:scale-110 duration-300  ease-in-out" />
            </a>
            <a href={member.githubUrl} target="_blank" rel="noreferrer">
              <BsGithub className="hover:text-[color:var(--color-primary)] hover:scale-110 duration-300  ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mx-auto mt-28">
      <div className="flex flex-col items-center justify-center header">
        <h1 className="text-[color:var(--color-primary)] text-4xl font-semibold mb-2 text-center">
          About Us
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <p
        className={twMerge(
          "tracking-wider mt-6 text-center text-[0.95rem] ",
          // isDarkMode ? "text-gray-300" : "text-gray-400"
        )}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci aperiam hic, rerum aut at harum, ipsa amet dolores expedita quos, deserunt ut animi? Unde consectetur blanditiis debitis ex provident repudiandae, voluptatum quis commodi! Officia ullam ipsum excepturi obcaecati dolores! Hic dicta voluptas tenetur. Quam at voluptate repellat ullam error tempore necessitatibus nihil facilis dolorum nobis.
      </p>

      <div className="flex flex-wrap items-center mt-12 justify-evenly">
        <div className="rounded-xl overflow-hidden w-80 mx-4 mb-8 shadow-[0px_0px_10px_rgba(0,0,0,0.4)] hover:scale-110 duration-700 ease-in-out">
          <div className="bg-[color:var(--color-primary)] px-4 py-3 text-white text-lg flex items-center gap-2">
            <FiTarget className="text-2xl" />
            <h3 className="">Mission</h3>
          </div>
          <div className="bg-[color:var(--main-color)] p-4">
            <p
              className={twMerge(
                "tracking-wider text-[color:var(--tertiary-text-color)] text-sm ",
                // isDarkMode ? "text-gray-300" : "text-gray-400"
              )}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perferendis delectus et. Porro iusto culpa provident maxime blanditiis perspiciatis eaque temporibus laborum! Velit delectus voluptates earum reiciendis exercitationem omnis ea, maiores a.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden w-80 mx-4 mb-8 shadow-[0px_0px_10px_rgba(0,0,0,0.4)] hover:scale-110 duration-700 ease-in-out">
          <div className="bg-[color:var(--color-primary)] px-4 py-3 text-white text-lg flex items-center gap-2">
            <FaServicestack className="text-2xl" />
            <h3 className="">Service</h3>
          </div>
          <div className="bg-[color:var(--main-color)] p-4">
            <p
              className={twMerge(
                "tracking-wider text-[color:var(--tertiary-text-color)] text-sm ",
                // isDarkMode ? "text-gray-300" : "text-gray-400"
              )}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque fuga facere beatae quasi quibusdam. Ipsa sint dolorum eum facilis cumque dolores ipsam non, quidem, sed tenetur maxime, et deleniti reprehenderit quos?
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden w-80 mx-4 mb-8 shadow-[0px_0px_10px_rgba(0,0,0,0.4)] hover:scale-110 duration-700 ease-in-out">
          <div className="bg-[color:var(--color-primary)] px-4 py-3 text-white text-lg flex items-center gap-2">
            <RiMessage3Fill className="text-2xl" />
            <h3 className="">Message</h3>
          </div>
          <div className="bg-[color:var(--main-color)] p-4">
            <p
              className={twMerge(
                "tracking-wider  text-[color:var(--tertiary-text-color)] text-sm ",
                // isDarkMode ? "text-gray-300" : "text-gray-400"
              )}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio est reiciendis vitae, nulla animi illo, nihil iure quo deleniti quaerat hic itaque soluta veritatis incidunt exercitationem eaque explicabo laudantium. Nihil, provident unde?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 header">
        <h1 className=" text-[color:var(--color-primary)] text-4xl font-semibold mb-2 text-center">
          Our Team
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="flex flex-wrap items-center mt-12 justify-evenly">
        {allMembers}
      </div>
    </div>
  );
};

export default AboutUs;