import React from "react";
import Assesments from "@/components/assesments";
import { createClient } from "@sanity/client";
import Head from "next/head";
const assesment = ({ asses }) => {
  return (
    <>
      <Head>
        <title>Assesment Quiz</title>
        <meta
          name="description"
          content="Recogize your problem while taking our quiz make by top professional"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Assesments asses={asses} />
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const asses = await client.fetch(`*[_type == "assessment"]`); //The
  return {
    props: {
      asses, //Return the fetch variable
    },
  };
}

export default assesment;
