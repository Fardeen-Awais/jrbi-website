import Head from "next/head";
import { styles } from "@/styles/styles"; // styles.paddingX idhar sai ai hai
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
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
  <div class="absolute -top-10 right-20 w-full min-h-screen bg-hero-pattern bg-contain bg-no-repeat bg-right-bottom opacity-10 overflow-hidden z-0"/>
  <Navbar />
  <Hero />
  <About/>
</div>

      </main>
    </>
  );
}
