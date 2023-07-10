import React from "react";
import { Standard } from "@typebot.io/react";
import Link from "next/link";
import Head from "next/head";
function chat() {
  return (
    <>
    <Head>
      <title>Chatbot Appointment</title>
        <meta name="description" content="Make appointment with our professional psychiatrists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Standard
        typebot="lead-generation-copy-to2m8tg"
        style={{ width: "100%", height: "100vh" }}
      />
      <Link href={"/"}>
        <div className="flex justify-center w-14 h-7 bg-black text-white px-14 rounded-md mx-auto cursor-pointer hover:bg-black-100 py-5 m-10 text-xs items-center">
          Go back{" "}
        </div>
      </Link>
    </div>
    </>
  );
}

export default chat;
