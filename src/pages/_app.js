import "@/styles/globals.css";
import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'
// import Navbar from "@/components/Navbar";

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400'],
})
const poppins = Poppins({
  subsets: ['latin-ext'],
  variable: '--font-poppins',
  weight: ['400'],
})
export default function App({ Component, pageProps }) {
  return (
    <main className={` ${anton.variable} ${poppins.variable} font-sans `}>
      {/* <Navbar/> */}
      <Component {...pageProps} />
    </main>
  );
}
