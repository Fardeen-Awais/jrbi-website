import React from "react";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { styles } from "@/styles/styles";
import {motion} from 'framer-motion'
import { textVariant } from "@/utils/motion";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function handleLinkClick(link) {
    setActive(link);
  }

  return (
    <>
      <header className="text-tertiary font-poppins">
      <nav
  className={`mx-auto max-w-6xl ${styles.paddingX} items-center justify-between py-4 lg:px-8 hidden lg:flex`}
  aria-label="Global"
>
  <Link href={'/'}>
    <div className="flex lg:flex-1 ">
      <h2 variants={textVariant(2)} className="font-anton text-4xl flex justify-center items-center pb-3 cursor-pointer ">
        Jrbi&apos;s
      </h2>
    </div>
  </Link>
  <div className="hidden lg:flex lg:gap-x-12 justify-center items-center mx-52 space-x-4">
    <div className="relative">
      <button
        type="button"
        className={` ${active === "product" ? "text-gray-900" : "text-gray-600"
          } flex items-center gap-x-1  text-sm font-medium  leading-6 `}
        // aria-expanded="false"
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
          } -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-pink-400 shadow-lg ring-1 ring-gray-900/5`}
      >
        <div className="p-4">
          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-pink-300">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-pink-50 group-hover:bg-white">
              <svg
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5  0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                    
                    <Link href="/" className="block font-semibold text-gray-900">
                        Analytics
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        Get a better understanding of stats in psychology
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-pink-300">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-pink-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link href="/" className="block font-semibold text-gray-900">
                        Engagement
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        How people interact in daily life
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-pink-300">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-pink-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link href="/" className="block font-semibold text-gray-900">
                        Biology
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        Let's learn about biological behaviour in your life
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-pink-300">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-pink-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link href="/" className="block font-semibold text-gray-900">
                        Integrations
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        Connect with third-party tools
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-pink-300">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-pink-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link href="/" className="block font-semibold text-gray-900">
                        Automations
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-800">
                        Build strategic funnels that will convert
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-pink-50">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Watch demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Contact sales
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
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Screens */}
        <div className="h-0 " role="dialog" aria-modal="true">
          <div className={`${!toggle ? 'bg-white' : 'bg-pink-400'} absolute flex flex-col lg:hidden right-0 z-10 w-full overflow-y-hidden px-6 py-4  lg:ring-1 lg:ring-gray-900/10 top-0 `}>
            <div className="flex items-center justify-between ">

              <div className="flex cursor-pointer">
                <Link href={'/'}>
                  <h2 className="font-anton text-4xl flex justify-center items-center pb-3 ">
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
                  <MenuIcon />
                )}
              </button>
            </div>
            <div className={`${!toggle ? "hidden" : "flex"} mt-6 flow-root `}>
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-pink-300"
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
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-pink-50"
                      >
                        Biological Psyhology
                      </a>

                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-pink-50"
                      >
                        Quick Quiz About your personality
                      </a>

                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-pink-50"
                      >
                        Security
                      </a>

                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-pink-50"
                      >
                        Integrations
                      </a>

                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-pink-50"
                      >
                        Automations
                      </a>

                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-pink-50"
                      >
                        Watch demo
                      </a>

                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-pink-50"
                      >
                        Contact sales
                      </a>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-300"
                  >
                    Feature
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-300"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-300"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-300"
                  >
                    Log in
                  </a>
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