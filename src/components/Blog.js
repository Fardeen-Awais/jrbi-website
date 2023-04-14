import React from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

function Blog({ posts }) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 m-7 md:p-6 py-10">
      {posts.map((arg) => {
        return (
          <Link href={"/research/" + arg.slug.current} key={arg.slug}>
            <article class="overflow-hidden rounded-lg shadow-lg transition hover:shadow-md h-96">
              <Image
                src={builder.image(arg.mainImage).url()}
                alt={arg.title}
                width={700}
                height={400}
                className="h-48 w-full object-cover transition-transform duration-200 ease-in-out center group-hover:scale-105"
              />

              <div class="bg-white p-4 sm:p-6">
                <time datetime="2022-10-10" class="block text-xs text-gray-500">
                  10th Oct 2022
                </time>


                <h3 class="mt-0.5 text-xl text-gray-900 font-poppins line-clamp-2">
                  {arg.title}
                </h3>


                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  {arg.metadesc}
                </p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  )
}

export default Blog