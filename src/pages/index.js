import Head from "next/head";
// import { styles } from "@/styles/styles"; // styles.paddingX idhar sai ai hai
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interversions from "@/components/Interversions";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact"
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export default function Home({posts}) {
  console.log(posts) // Imported sucessfully
  return (
    <>
      <Head>
        <title>Jrbi - Psychologist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div class="relative overflow-x-hidden">
          <div class="absolute w-[380px] -top-36 right-20 min-h-screen bg-hero-pattern bg-contain bg-no-repeat bg-right-bottom opacity-10 overflow-hidden z-0" />
          <Hero />
          <About />
          <Interversions/>
          <Blog/>
          <Contact/>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "rpf7v2k6", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const blogs = await client.fetch(`*[_type == "blog"]`);
  const author = await client.fetch(`*[_type == "author"]`);
  return {
    props: {
      blogs, //Return the fetch variable
      author
    },
  };
}