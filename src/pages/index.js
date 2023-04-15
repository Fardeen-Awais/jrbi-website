import Head from "next/head"; // styles.paddingX idhar sai ai ha
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact"
import { createClient } from "@sanity/client";
import Whocanjoin from "@/components/Whocanjoin";
import Video from "@/components/Video";
import Assesments from "@/components/assesments";
import { Trusted } from "@/components/Trusted";

export default function Home({posts,youtube,asses}) {
  const firstThreePosts = posts.slice(0, 3);
  const firstThreeVideo = youtube.slice(0,3)
  return (
    <>
      <Head>
        <title>Jrbi - Psychologist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div class="relative overflow-x-hidden prose-h2:text-6xl prose-h1:text-7xl prose-h3:text-tertiary prose-h2:leading-normal prose-p:font-poppins">
          <div class="absolute w-[380px] -top-36 right-20 min-h-screen bg-hero-pattern bg-contain bg-no-repeat bg-right-bottom opacity-10 overflow-hidden z-0 " />
          <Hero />
          <Service />
          <Whocanjoin/>
          <h2 className='font-anton flex justify-center items-center mx-auto text-tertiary py-10'>Latest Blog</h2>
          <Blog posts={firstThreePosts}/>
          <h2 className='font-anton flex justify-center items-center mx-auto text-tertiary py-10'>Our video</h2>
          <Video youtube={firstThreeVideo}/>
          <Assesments asses={asses}/>
          <Trusted/>
          <Contact/>
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
      asses
    },
  };
}