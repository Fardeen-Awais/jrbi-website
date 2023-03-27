import "@/styles/globals.css";
import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'
const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400'],
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400'],
})
export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} ${anton.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
