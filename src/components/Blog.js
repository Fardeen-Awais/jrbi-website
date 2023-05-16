import React from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
function Blog({ posts }) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <div className="min-h-screen bg-white-100 dark:bg-black-100 p-4 ">
      <div className="flex flex-col justify-center items-center my-10 ">
        <h2 className=" border-2 border-gray-600 p-2 ">Our Blogs</h2>
        <p className="py-4 text-xl">Read some research based articles</p>
      </div>
      <motion.div
        variants={fadeIn("right", "spring", 0.8, 0.5)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 m-7 md:p-6 py-10 max-w-6xl mx-auto"
      >
        {posts.map((arg) => {
          return (
            <Link href={"/research/" + arg.slug.current} key={arg.slug}>
              <div class="overflow-hidden rounded-lg shadow-md transition hover:shadow-sm h-96 my-3 bg-white  text-tertiary">
                <Image
                  src={builder.image(arg.mainImage).url()}
                  alt={arg.title}
                  width={700}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-200 ease-in-out center group-hover:scale-105"
                />

                <div class="bg-white p-4 sm:p-6">
                  <time
                    datetime="2022-10-10"
                    class="block text-xs text-gray-900"
                  >
                    {arg._createdAt}
                  </time>

                  <h3 class="mt-0.5 text-xl  font-poppins  line-clamp-2 text-gray-900">
                    {arg.title}
                  </h3>

                  <p class="mt-2 text-sm font-light leading-relaxed  line-clamp-3 text-gray-900">
                    {arg.metadesc}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Blog;
