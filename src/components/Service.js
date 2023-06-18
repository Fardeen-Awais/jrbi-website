import { SectionWrapper } from "@/hoc";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Alcohol Use",
    src: `/icons/ServicesIcon/Alcohol.svg`,
    description:
      "Looking to manage your drinking behavior? Sign up and be part of our research participants to have first hand access to our intervention plan",
  },
  {
    id: 2,
    title: "Smoking & Vaping",
    src: `/icons/ServicesIcon/smoke_free.svg`,
    description:
      "Tried quitting but find yourself falling back into the loop? Find yourself swapping between conventional cigs and e-cigs? Commit to our intervention plan for a novel approach to help you make effective decisions in quitting smoking",
  },
  {
    id: 3,
    title: "Illicit Drug Use",
    src: `/icons/ServicesIcon/drugs.svg`,
    description:
      "Find yourself using drugs, whether prescribed or non-prescribed in an illicit manner? Sign up for our self-efficacy intervention program to assist you in managing your presenting issues in a more effective manner",
  },
  {
    id: 4,
    title: "Driving Behavior",
    src: `/icons/ServicesIcon/driving.svg`,
    description:
      "Have you been in a car driven by a reckless driver? Got yourself a demerit for poor driving behavior? Or have you got your license suspended because of your driving behaviour? Learn how you can improve your driving behavior by being part of our research intervention",
  },
  {
    id: 5,
    title: "Risky Sexual Behavior",
    src:"/icons/ServicesIcon/love.svg",
    description:
      "Do you know anyone who has limited knowledge of good practices of sexual behaviour? Join our intervention program to learn how you can avoid sexual health hazards by learning how to make effective decisions independently",
  },
  {
    id: 6,
    title: "Gambling",
    src:"/icons/ServicesIcon/casino.svg",
    description:
      "Find yourself in a financial burden because of spending too much virtual tokens on an online game? Did you realize that the aforementioned scenario is a form of gambling? Learn more on how you can avoid accidental gambling or intentional gambling with our intervention program.",
  },
  {
    id: 7,
    title: "Unhealthy Dietary Behavior",
    src:"/icons/ServicesIcon/ramen_dining.svg",
    description:
      "Want to improve your eating behaviors? Our intervention programs addresses all forms of eating behaviours, from frequent fast-food eating to meal skipping behaviors.",
  },
  {
    id: 8,
    title: "IRBI Counseling",
    src:"/icons/ServicesIcon/irbi.svg",
    description:
      "In the event where you believe you need further assistance, such as counselling while working on the intervention program, this platform provides complimentary counseling for the specific intervention program that you have signed up for",
  },
];

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-10 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className=" border-2 border-gray-600 p-2 ">Our Intervention Plan</h2>
        <p className="py-4 text-xl">{`We${'\u2019'}ve got your top 7 health behaviours covered!`}</p>
      </div>
      <div className="flex flex-wrap -mx-4 ">
        {services.map((service) => (
          <div
            className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 "
            key={service.id}
          >
            <div className="bg-white-100  p-2 h-64 shadow-md hover:shadow-sm rounded-lg overflow-hidden">
              <div className="py-4 px-4 cursor-pointer text-black ">
              {/* <div dangerouslySetInnerHTML={{ __html: service.src }}></div> */}
              <img className="h-9" src={service.src} alt="SVG Icon" />
                <h3 className="text-xl py-4 font-montserrat font-bold ">
                  {service.title}
                </h3>
                <p className="text-xs font-montserrat line-clamp-5">
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
