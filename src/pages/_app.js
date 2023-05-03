import "@/styles/globals.css";
import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Navbar from "@/components/Navbar";

const anton = Anton({
  subsets: ['vietnamese'],
  variable: '--font-anton',
  weight: ['400'],
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['500'],
})
export default function App({ Component, pageProps }) {
  return (
    <main className={`${anton.variable} ${poppins.variable} font-poppins prose-headings:font-anton  prose-headings:tracking-wide prose-h1:text-7xl prose-h1:font-extrabold prose-h2:text-6xl  prose-h2:leading-normal prose-p:font-poppins bg-white-100 dark:bg-tertiary dark:text-white overflow-hidden`}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  );
}
