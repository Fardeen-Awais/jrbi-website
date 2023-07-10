import React from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Disclosure } from '@headlessui/react'
import Ourteam from "@/components/Ourteam";
import Link from "next/link";
function Team({ author }) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <main className="flex flex-col ">
      <Ourteam author={author}/>
      <div className="Appointment flex flex-col items-center justify-center p-5 m-10 md:m-28 gap-4">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h2 className="text-3xl font-bold font-montserrat">Need an Help</h2>
          <p className="text-center text-sm max-w-md md:max-w-lg">
            Our professional can help you with any questions you have. Schdeule your appointment today and have an meetup with us join our study program. Tell jolyce what should i write here lol
          </p>
        </div>
        <div className="flex">
          <Link href={'/chat'}>
          <button class="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
            Book Now 
          </button>
          </Link>
          <button class="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-900">
            About us
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
