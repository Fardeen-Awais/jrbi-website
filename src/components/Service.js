import { SectionWrapper } from "@/hoc";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Individual Therapy",
    src: `/icons/ServicesIcon/individual_icon.svg`,
    description:
      "Individual therapy provides a safe and supportive environment to work through personal challenges and to build selfawareness and insight.",
  },
  {
    id: 2,
    title: "Couples Therapy",
    src: `/icons/ServicesIcon/relationship_icon.svg`,
    description:
      "Couples therapy helps partners work through communication issues, conflicts, and challenges to create healthier and more fulfilling relationships.",
  },
  {
    id: 3,
    title: "Family Therapy",
    src: `/icons/ServicesIcon/house.svg`,
    description:
      "Family therapy helps family members communicate more effectively, improve relationships, and work through challenges as a team.",
  },
  {
    id: 4,
    title: "Group Therapy",
    src: `/icons/ServicesIcon/family_restroom.svg`,
    description:
      "Group therapy provides a supportive and collaborative environment to work through common challenges and to build social support networks.",
  },
  {
    id: 5,
    title: "Smoking Therapy",
    src:"/icons/ServicesIcon/smoke_free.svg",
    description:
      "Helps you to quit your smoking habit as quick as possible with our experts section. ",
  },
  {
    id: 6,
    title: "Anxiety treatment",
    src:"/icons/ServicesIcon/sentiment_sad.svg",
    description:
      "Treat your anxiety with us, share your feelings. Research shows sharing the problem of anxiety is the half treatment.",
  },
  {
    id: 7,
    title: "Sex Education",
    src:"/icons/ServicesIcon/sex_education.svg",
    description:
      "Help you to manage your sex problems regarding with your problem. Sexual anxiety, less satisfaction etc.",
  },
  {
    id: 8,
    title: "Quit your Drugs",
    src:"/icons/ServicesIcon/smoke_free.svg",
    description:
      "Our Experts panel helps you to manage and control your drugs intake and also deals with anxiety related to the drugs consumption.",
  },
];

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-10 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className=" border-2 border-gray-600 p-2 ">Our Services</h2>
        <p className="py-4 text-xl">Explore our services for you</p>
      </div>
      <div className="flex flex-wrap -mx-4 ">
        {services.map((service) => (
          <div
            className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 "
            key={service.id}
          >
            <div className="bg-white-100  p-2 h-56 shadow-md hover:shadow-sm rounded-lg overflow-hidden">
              <div className="py-4 px-4 cursor-pointer text-black ">
              {/* <div dangerouslySetInnerHTML={{ __html: service.src }}></div> */}
              <img className="h-9" src={service.src}alt="SVG Icon" />
                <h3 className="text-xl py-4 font-montserrat font-bold ">
                  {service.title}
                </h3>
                <p className="text-xs font-montserrat line-clamp-4">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services,"service");
