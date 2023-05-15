import { SectionWrapper } from "@/hoc";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Individual Therapy",
    src: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M200 896V576H80l400-360 200 177V276h80v191l120 108.574H760V896H565V656H395v240H200Zm195-410h170q0-33-25.5-54.5T480 410q-34 0-59.5 21.342Q395 452.685 395 486Z"/></svg>`,
    description:
      "Individual therapy provides a safe and supportive environment to work through personal challenges and to build self-awareness and insight.",
  },
  {
    id: 2,
    title: "Couples Therapy",
    src: "",
    description:
      "Couples therapy helps partners work through communication issues, conflicts, and challenges to create healthier and more fulfilling relationships.",
  },
  {
    id: 3,
    title: "Family Therapy",
    src: "",
    description:
      "Family therapy helps family members communicate more effectively, improve relationships, and work through challenges as a team.",
  },
  {
    id: 4,
    title: "Group Therapy",
    src: "",
    description:
      "Group therapy provides a supportive and collaborative environment to work through common challenges and to build social support networks.",
  },
  {
    id: 5,
    title: "Group Therapy",

    description:
      "Group therapy provides a supportive and collaborative environment to work through common challenges and to build social support networks.",
  },
];

const Services = () => {
  return (
    <div className="bg-white p-10 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center">
      <h2 className=" border-2 border-gray-600 p-2 ">Our Services</h2>
      <p className="py-4 text-xl">Explore our services for you</p>
      </div>
      <div className="flex flex-wrap -mx-4 ">
        {services.map((service) => (
            <div
            className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 "
            key={service.id} 
          >
            <div className="bg-white-100 p-2 h-56 shadow-md hover:shadow-sm rounded-lg overflow-hidden">
              <div className="py-4 px-4 cursor-pointer text-black ">
                <img className="h-9" src="./smoking-rooms.svg" alt="SVG Icon" />
                <h3 className="text-xl py-4 font-montserrat font-bold ">{service.title}</h3>
                <p className="text-xs font-montserrat line-clamp-4">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services
