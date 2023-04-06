import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/hoc";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

function Blog({posts}) {
  const client = createClient({
    projectId: "rpf7v2k6", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 m-7 md:p-6 ">
    {posts.map((arg) => {
      return (
        <Link href={"/research/" + arg.slug.current} key={arg.slug}>
          <div className="group cursor-pointer shadow-md overflow-hidden my-2 h-96 flex flex-col">
            <Image
              src={builder.image(arg.mainImage).url()}
              alt="gaming"
              width={700}
              height={400}
              className="h-48 w-full object-cover transition-transform duration-200 ease-in-out center group-hover:scale-105"
            />

            <div className="flex justify-center p-4 bg-white">
              <div>
                <h3 className="font-poppins text-xl font-semibold hover:text-blue-900 line-clamp-2">{arg.title}</h3>
                <p className="text-sm my-2 tracking-wider line-clamp-4">{arg.metadesc}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    })}
  </div>
  )
}

export default Blog