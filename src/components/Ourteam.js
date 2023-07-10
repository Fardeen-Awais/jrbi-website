import React from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

function Ourteam({ author }) {
  console.log({author});
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <div className="flex flex-col justify-center h-full py-10">
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
    </div>
  );
}

export default Ourteam;


