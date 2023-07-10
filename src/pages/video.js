import React from "react";
import Video from "@/components/Video";
import { createClient } from "@sanity/client";
import Head from "next/head";
export default function video({ youtube }) {
  return (
    <>
      <Head>
        <title>Video Resources</title>
        <meta
          name="description"
          content="Make the most use of our video resources for your intervention journey"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Video youtube={youtube} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const youtube = await client.fetch(`*[_type == "youtube"]`);
  return {
    props: {
      youtube,
    },
  };
}
