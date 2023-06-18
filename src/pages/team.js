import React from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Disclosure } from '@headlessui/react'

function Team({ author }) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <main className="flex flex-col">
      <div className="section flex justify-center items-center m-20 md:m-32">
        <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-gray-900">
          Our Team
        </h1>
      </div>

      <div className="ourTeam max-h-screen grid grid-cols-3 gap-y-10 px-2 md:px-10 md:mx-36 ">
        {author.map((member) => (
          <div
            key={member._id}
            className="profile flex flex-col items-center justify-center gap-5"
          >
            {member.authorImage && (
              <Image
                src={builder.image(member.authorImage).url()}
                alt={member.title}
                width={200}
                height={200}
                className="h-14 w-14 object-cover rounded-full border-[1px] border-spacing-9 border-solid border-gray-900 "
              />
            )}
            <div className="flex flex-col items-center justify-center gap-1">
              <h2 className="Name text-sm font-semibold">{member.name}</h2>
              <p className="about text-xs">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Appointment flex flex-col items-center justify-center p-5 m-10 md:m-28 gap-4">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h2 className="text-3xl font-bold font-montserrat">Need an Help</h2>
          <p className="text-center text-sm max-w-md md:max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus aspernatur quidem a consequatur repellendus labore
            voluptatum adipisci necessitatibus! Est, vitae fuga. Delectus,
            dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="flex">
          <button class="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
            Regular
          </button>
          <button class="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-900">
            Regular
          </button>
        </div>
      </div>

      <div className="FAQ flex flex-col items-center  mx-auto max-w-6xl m-20 p-6  ">
        <h2 className="flex justify-start text-4xl font-serif font-medium">
          Questions?
        </h2>
        <div>
        <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-start rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If youre unhappy with your purchase for any reason, email us
                within 90 days and well refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
               
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>Do you have Whatsapp Support</span>
               
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Absolutely
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
        </div>
      
      </div>
    </main>
  );
}

export default Team;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const author = await client.fetch(`*[_type == "author"]`);
  return {
    props: {
      author,
    },
  };
}
