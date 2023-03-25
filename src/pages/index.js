import Head from 'next/head'
import { styles } from '@/styles/styles' // styles.paddingX idhar sai ai hai
import Navbar from '@/components/Navbar'


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
        <h2 className={`bg-yellow-400 text-teal-800 text-3xl ${styles.paddingX}`}>Hi Iqra let's get started, Don't overthink about folder most of them i created. Yay aik component ka demo lo </h2>

        <div><Navbar/></div>
      </main>
    </>
  )
}
