import Head from "next/head";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { createClient } from "@sanity/client";
import Video from "@/components/Video";
import Assesments from "@/components/assesments";
import Chat from "@/components/Chat";
import Ourteam from "@/components/Ourteam";
export default function Home({ posts, youtube, asses , author }) {
  const firstThreePosts = posts.slice(0, 3);
  const firstThreeVideo = youtube.slice(0, 3);
  return (
    <>
      <Head>
        <title>Rbi-Healthspace</title>
        <meta name="description" content="Rbi-Healthspace helps you to recover from psycholgical disorder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div class="relative overflow-x-hidden">
          <div class="absolute w-[380px] -top-36 right-20 min-h-screen bg-hero-pattern bg-contain bg-no-repeat bg-right-bottom opacity-10 overflow-hidden z-0 " />
          <Hero />
          <Service />
          <Ourteam author={author} />
          <Chat />{" "}
          
          {/* Appointment ask question get answers get some quizzes get email and do meeting.  */}
          <Assesments asses={asses} />{" "}
          {/* Test yourself with expert maked quiz Section */}
          {/* <Trusted/> */}
     
          <Blog posts={firstThreePosts} />
          <Video youtube={firstThreeVideo} />
          {/* <Ourteam/> */}
          <Contact />
          {/* <Subscribe/> */}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const posts = await client.fetch(`*[_type == "blog"]`);
  const author = await client.fetch(`*[_type == "author"]`);
  const youtube = await client.fetch(`*[_type == "youtube"]`);
  const asses = await client.fetch(`*[_type == "assessment"][0..2]`);
  return {
    props: {
      posts, //Return the fetch variable
      author,
      youtube,
      asses,
    },
  };
}
