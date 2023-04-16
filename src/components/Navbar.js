import React from "react";
import { useState } from "react";
import Link from "next/link";
import { styles } from "@/styles/styles";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function handleLinkClick(link) {
    setActive(link);
  }

  return (
    <>
      <header className="text-tertiary font-poppins relative top-0 py-1">
        <nav
          className={`mx-auto max-w-6xl ${styles.paddingX} items-center justify-between py-4 lg:px-8 hidden lg:flex`}
          aria-label="Global"
        >
          <Link href={'/'}>
            <motion.div 
    variants ={fadeIn('up','spring',3,5)} className="flex lg:flex-1 ">
              <h2 className="font-anton text-4xl flex justify-center items-center pb-3 cursor-pointer ">
                Jrbi
              </h2>
            </motion.div>
          </Link>
          <div className="hidden lg:flex lg:gap-x-12 justify-center items-center mx-52 space-x-4">
            <div className="relative">
              <button
                type="button"
                className={` ${active === "product" ? "text-gray-900" : "text-gray-600"
                  } flex items-center gap-x-1  text-sm font-medium  leading-6 `}
                onClick={() => handleLinkClick("product")}
              >
                Menu
                <svg
                  onClick={() => setToggle(!toggle)}
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Options for product   */}
              <div
                className={`${!toggle ? "hidden" : "absolute"
                  } -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}
              >
                <div className="p-4">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M473.333 945.087q-16 0-26.938-10.972-10.939-10.972-10.939-27.022 0-16.049 10.939-26.904 10.938-10.855 26.938-10.855H777V565.145q0-58.558-24.757-111.623-24.757-53.066-66.221-93.225-41.464-40.16-94.982-63.826-53.518-23.667-111.04-23.667-57.442 0-110.96 23.667-53.518 23.666-94.982 63.826-41.464 40.159-66.182 93.225-24.717 53.065-24.717 111.623v224.189q0 13.326-9.022 22.268-9.021 8.942-22.347 8.942-34.834 0-59.689-24.856Q67.246 770.833 67.246 736v-84.544q0-23.717 10.84-41.775 10.841-18.058 29.16-29.616l2.442-47.101q7.645-75.71 40.982-137.74 33.337-62.029 83.949-105.659 50.613-43.63 114.062-67.765Q412.13 197.666 480 197.666q68.63 0 132.08 23.975 63.449 23.975 113.681 67.866t83.569 105.58q33.337 61.688 40.982 137.116l2.442 45.942q18.239 9.797 29.119 28.214 10.881 18.416 10.881 39.974v94.631q0 22.558-10.881 41.63-10.88 19.073-29.119 28.71v58.03q0 31.246-22.254 53.5-22.253 22.253-53.5 22.253H473.333ZM360 650.927q-14.384 0-24.656-10.271-10.271-10.272-10.271-24.989 0-14.718 10.271-24.656 10.272-9.938 24.989-9.938 14.718 0 24.656 10.021 9.938 10.022 9.938 24.906 0 14.384-10.021 24.656-10.022 10.271-24.906 10.271Zm240 0q-14.384 0-24.656-10.271-10.271-10.272-10.271-24.989 0-14.718 10.271-24.656 10.272-9.938 24.989-9.938 14.718 0 24.656 10.021 9.938 10.022 9.938 24.906 0 14.384-10.021 24.656-10.022 10.271-24.906 10.271Zm-363.304-65.456q-3.921-57.167 16.818-105.007 20.74-47.841 55.798-81.899 35.058-34.058 80.815-52.935 45.757-18.877 91.873-18.877 91.558 0 157.29 58.696 65.732 58.696 78.377 145.413-94.479-1-168.435-49.543-73.957-48.544-113.674-126.747-16.797 79.884-70.17 141.348-53.374 61.464-128.692 89.551Z"/></svg>
                    </div>
                    <div className="flex-auto">

                      <Link href="/" className="block font-semibold text-gray-900">
                        Our Service
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        Explore what we are offering
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M499.391 570.456q30.153-32.413 46.12-74.445 15.967-42.033 15.967-86.326 0-44.294-16.195-86.685-16.196-42.392-46.37-73.848 61.326 9.913 99.446 56.174 38.119 46.261 38.119 104.478 0 59.174-38.358 105.196-38.359 46.022-98.729 55.456Zm199.196 324.74q10.957-5.957 17.424-17.36 6.467-11.403 6.467-26.64v-76.674q0-37.848-14.76-70.044-14.761-32.195-41.196-57.63 52.543 16.304 93.913 46.674 41.37 30.369 41.37 81v78.174q0 17.652-12.424 30.076t-30.077 12.424h-60.717Zm140-287.674q-15.5 0-26.5-11t-11-26.5v-42.218H758.87q-15.5 0-26.5-11t-11-26.5q0-15.5 11-26.5t26.5-11h42.217v-42.217q0-15.5 11-26.5t26.5-11q15.5 0 26.5 11t11 26.5v42.217h42.218q15.5 0 26.5 11t11 26.5q0 15.5-11 26.5t-26.5 11h-42.218v42.218q0 15.5-11 26.5t-26.5 11Zm-515-34.587q-68.087 0-115.609-47.522-47.522-47.522-47.522-115.609 0-68.087 47.522-115.489t115.609-47.402q68.087 0 115.489 47.402t47.402 115.489q0 68.087-47.402 115.609-47.402 47.522-115.489 47.522ZM46.957 895.196q-17.653 0-30.077-12.424-12.424-12.424-12.424-30.076v-72.109q0-35.234 17.826-64.356 17.826-29.122 48.479-44.579 61.956-30.239 125.282-45.728 63.327-15.489 127.544-15.489 64.935 0 128.141 15.369 63.207 15.37 124.446 45.609 30.652 15.457 48.478 44.5 17.826 29.044 17.826 64.674v72.109q0 17.652-12.424 30.076t-30.076 12.424H46.956Z"/></svg>
                    </div>
                    <div className="flex-auto">
                      <Link href="/" className="block font-semibold text-gray-900">
                        Who can join us
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        {`Let's see who can join our organization! We welcome individuals from diverse`}
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M323.935 768.565h197q15.5 0 26.5-11t11-26.5q0-15.5-11-26.5t-26.5-11h-197q-15.5 0-26.5 11t-11 26.5q0 15.5 11 26.5t26.5 11Zm0-155.565h312.13q15.5 0 26.5-11t11-26.5q0-15.5-11-26.5t-26.5-11h-312.13q-15.5 0-26.5 11t-11 26.5q0 15.5 11 26.5t26.5 11Zm0-155.565h312.13q15.5 0 26.5-11t11-26.5q0-15.5-11-26.5t-26.5-11h-312.13q-15.5 0-26.5 11t-11 26.5q0 15.5 11 26.5t26.5 11ZM206.87 935.131q-35.783 0-60.892-25.109t-25.109-60.892V302.87q0-35.783 25.109-60.892t60.892-25.109h546.26q35.783 0 60.892 25.109t25.109 60.892v546.26q0 35.783-25.109 60.892t-60.892 25.109H206.87Z"/></svg>
                    </div>
                    <div className="flex-auto">
                      <Link href="/" className="block font-semibold text-gray-900">
                        Interactive Blogs
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        Explore some article on previous reseaches
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M796.239 942.138q-125.688 0-247.99-59.734-122.302-59.733-218.859-156.181-96.557-96.448-156.281-218.85-59.725-122.402-59.725-247.931 0-21.499 14.439-35.938 14.439-14.439 35.938-14.439h147.253q18.284 0 31.472 11.087 13.188 11.087 16.97 30.406L386.043 377q2.797 17.348-.545 31.02-3.343 13.672-13.897 23.56l-100.116 98.405q49.74 82.334 114.181 146.27 64.442 63.936 144.197 109.108l96.021-97.464q11.819-12.247 27.312-17.265 15.493-5.018 31.935-1.474l119.833 26.108q19.099 4.526 30.376 18.013 11.276 13.487 11.276 32.886v145.355q0 21.692-14.439 36.154-14.439 14.462-35.938 14.462ZM234.275 460.573l75.761-74.834-20.681-100.921h-99.486q1.188 38.317 11.82 81.279 10.631 42.962 32.586 94.476ZM770.703 865.24v-99.631l-96.014-20.015-74.522 76.87q39.058 17.935 83.402 29.029 44.344 11.094 87.134 13.747Zm-170.442-42.87ZM234.275 460.573Z"/></svg>
                    </div>
                    <div className="flex-auto">
                      <Link href="/" className="block font-semibold text-gray-900">
                        Contact Us
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        Get in touch with us
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M225.92 917.283q-52.964 0-90.721-37.757-37.757-37.758-37.757-90.721 0-52.964 37.757-90.841 37.757-37.877 90.721-37.877 52.964 0 90.841 37.877 37.876 37.877 37.876 90.841 0 52.963-37.876 90.721-37.877 37.757-90.841 37.757Zm508.16 0q-52.964 0-90.841-37.757-37.876-37.758-37.876-90.721 0-52.964 37.876-90.841 37.877-37.877 90.841-37.877 53.631 0 91.054 37.877 37.424 37.877 37.424 90.841 0 52.963-37.424 90.721-37.423 37.757-91.054 37.757ZM480 491.753q-52.964 0-90.841-37.903-37.876-37.903-37.876-90.655 0-52.963 37.876-90.721 37.877-37.757 90.841-37.757 52.964 0 90.841 37.757 37.876 37.758 37.876 90.642 0 52.884-37.876 90.761-37.877 37.876-90.841 37.876Z"/></svg>
                    </div>
                    <div className="flex-auto">
                      <Link href="/" className="block font-semibold text-gray-900">
                        Our Team
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        Meet our talented and dedicated team who are passionate about research
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-white">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              </div>

            </div>

            <Link
              href={"/blogs"}
              className={` ${active === "Blog" ? "text-gray-900" : "text-gray-600"
                } flex items-center gap-x-1 text-sm font-medium leading-6 cursor-pointer`}
              onClick={() => handleLinkClick("Blog")}
            >

              Blog
            </Link>

            <Link
              href={"/assesment"}
              className={` ${active === "Tournaments" ? "text-gray-900" : "text-gray-600"
                } flex items-center gap-x-1 text-sm font-medium leading-6 cursor-pointer`}
              onClick={() => handleLinkClick("Tournaments")}
            >
              Assesments
            </Link>
            <Link
              href={"/video"}
              className={` ${active === "Esports" ? "text-gray-900" : "text-gray-600"
                } flex cursor-pointer items-center gap-x-1 text-sm font-medium leading-6 `}
              onClick={() => handleLinkClick("Esports")}
            >
              video
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Screens */}
        <div role="dialog" aria-modal="true">
          <div className={`${!toggle ? 'bg-white' : 'bg-white min-h-screen'} absolute flex flex-col lg:hidden right-0 z-10 w-full overflow-y-hidden px-6 py-4  lg:ring-1 lg:ring-gray-900/10 top-0 `}>
            <div className="flex items-center justify-between ">

              <div className="flex cursor-pointer">
                <Link href={'/'}>
                  <h2 className="font-anton text-3xl flex justify-center items-center ">
                    Jrbi
                  </h2>
                </Link>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M165.5 819.087q-17.652 0-30.326-12.674T122.5 776.087q0-17.652 12.674-30.326t30.326-12.674h630q17.652 0 30.326 12.674t12.674 30.326q0 17.652-12.674 30.326T795.5 819.087h-630Zm0-200.587q-17.652 0-30.326-12.674T122.5 575.5q0-17.652 12.674-30.326T165.5 532.5h630q17.652 0 30.326 12.674T838.5 575.5q0 17.652-12.674 30.326T795.5 618.5h-630Zm0-199.587q-17.652 0-30.326-12.674T122.5 375.913q0-17.652 12.674-30.326t30.326-12.674h630q17.652 0 30.326 12.674t12.674 30.326q0 17.652-12.674 30.326T795.5 418.913h-630Z"/></svg> 
                )}
              </button>
            </div>
            <div className={`${!toggle ? "hidden" : "flex"} mt-6 flow-root `}>
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 hover:bg-white-100"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                      onClick={() => setDropdown(!dropdown)}
                    >
                      Menu
                      <svg
                        className="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      id="disclosure-1"
                      className={`${!dropdown ? "hidden" : "flex flex-col"} `}
                    >
                      <Link
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Our Service 
                      </Link>

                      <Link
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Who can join us
                      </Link>

                      <Link
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Interactive Blogs
                      </Link>

                      <Link
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Our videos
                      </Link>

                      <Link
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Research
                      </Link>

                      <Link
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Contact us
                      </Link>

                      <Link
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Our Team
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/blogs"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/assesment"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Assesments
                  </Link>
                  <Link
                    href="/video"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Video
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-white-100"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}

export default Navbar;