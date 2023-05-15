import "@/styles/globals.css";
import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const anton = Anton({
  subsets: ['vietnamese'],
  variable: '--font-anton',
  weight: ['400'],
})
const poppins = Poppins({
  subsets: ['latin-ext'],
  variable: '--font-poppins',
  weight: ['500'],
})
const montserrat = Montserrat({
  subsets: ['vietnamese'],
  variable: '--font-montserrat',
  weight: ['900'],  
})
export default function App({ Component, pageProps }) {
  return (
    <main className={`${anton.variable} ${poppins.variable} ${montserrat.variable} bg-white text-black-100 dark:bg-gray-900 dark:text-white overflow-hidden`}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  );
}
