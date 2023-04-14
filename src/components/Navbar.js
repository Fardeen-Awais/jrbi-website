// import React from "react";
// import { useState } from "react";
// import Link from "next/link";
// import { styles } from "@/styles/styles";
// import { motion } from 'framer-motion'
// import { textVariant } from "@/utils/motion";


// function Navbar() {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   function handleLinkClick(link) {
//     setActive(link);
//   }

//   return (
//     <>
//       <header className="text-tertiary font-poppins">
//         <nav
//           className={`mx-auto max-w-6xl ${styles.paddingX} items-center justify-between py-4 lg:px-8 hidden lg:flex`}
//           aria-label="Global"
//         >
//           <Link href={'/'}>
//             <div className="flex lg:flex-1 ">
//               <h2 variants={textVariant(2)} className="font-anton text-4xl flex justify-center items-center pb-3 cursor-pointer ">
//                 Jrbi
//               </h2>
//             </div>
//           </Link>
//           <div className="hidden lg:flex lg:gap-x-12 justify-center items-center mx-52 space-x-4">
//             <div className="relative">
//               <button
//                 type="button"
//                 className={` ${active === "product" ? "text-gray-900" : "text-gray-600"
//                   } flex items-center gap-x-1  text-sm font-medium  leading-6 `}
//                 // aria-expanded="false"
//                 onClick={() => handleLinkClick("product")}
//               >
//                 Menu
//                 <svg
//                   onClick={() => setToggle(!toggle)}
//                   className="h-5 w-5 flex-none text-gray-400"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {/* Options for product   */}
//               <div
//                 className={`${!toggle ? "hidden" : "absolute"
//                   } -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}
//               >
//                 <div className="p-4">
//                   <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
//                     <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
//                       <SupportAgentIcon />
//                     </div>
//                     <div className="flex-auto">

//                       <Link href="/" className="block font-semibold text-gray-900">
//                         Our Service
//                         <span className="absolute inset-0"></span>
//                       </Link>
//                       <p className="mt-1 text-gray-800">
//                         Explore what we are offering
//                       </p>
//                     </div>
//                   </div>
//                   <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
//                     <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
//                       <DynamicFormIcon/>
//                     </div>
//                     <div className="flex-auto">
//                       <Link href="/" className="block font-semibold text-gray-900">
//                         Who can join us
//                         <span className="absolute inset-0"></span>
//                       </Link>
//                       <p className="mt-1 text-gray-800">
//                         {`Let's see who can join our organization! We welcome individuals from diverse`}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
//                     <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
//                       <ArticleIcon/>
//                     </div>
//                     <div className="flex-auto">
//                       <Link href="/" className="block font-semibold text-gray-900">
//                         Interactive Blogs
//                         <span className="absolute inset-0"></span>
//                       </Link>
//                       <p className="mt-1 text-gray-800">
//                         Explore some article on previous reseaches
//                       </p>
//                     </div>
//                   </div>
//                   <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
//                     <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
//                       <Phone/>
//                     </div>
//                     <div className="flex-auto">
//                       <Link href="/" className="block font-semibold text-gray-900">
//                         Contact Us
//                         <span className="absolute inset-0"></span>
//                       </Link>
//                       <p className="mt-1 text-gray-800">
//                         Get in touch with us
//                       </p>
//                     </div>
//                   </div>
//                   <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white-100">
//                     <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
//                       <WorkspacesIcon/>
//                     </div>
//                     <div className="flex-auto">
//                       <Link href="/" className="block font-semibold text-gray-900">
//                         Our Team
//                         <span className="absolute inset-0"></span>
//                       </Link>
//                       <p className="mt-1 text-gray-800">
//                         Meet our talented and dedicated team who are passionate about research
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-white">
//                   <a
//                     href="#"
//                     className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//                   >
//                     Login
//                   </a>
//                   <a
//                     href="#"
//                     className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//                   >
//                     Logout
//                   </a>
//                 </div>
//               </div>

//             </div>

//             <Link
//               href={"/blogs"}
//               className={` ${active === "Blog" ? "text-gray-900" : "text-gray-600"
//                 } flex items-center gap-x-1 text-sm font-medium leading-6 cursor-pointer`}
//               onClick={() => handleLinkClick("Blog")}
//             >

//               Blog
//             </Link>

//             <Link
//               href={"/assesment"}
//               className={` ${active === "Tournaments" ? "text-gray-900" : "text-gray-600"
//                 } flex items-center gap-x-1 text-sm font-medium leading-6 cursor-pointer`}
//               onClick={() => handleLinkClick("Tournaments")}
//             >
//               Assesments
//             </Link>
//             <Link
//               href={"/video"}
//               className={` ${active === "Esports" ? "text-gray-900" : "text-gray-600"
//                 } flex cursor-pointer items-center gap-x-1 text-sm font-medium leading-6 `}
//               onClick={() => handleLinkClick("Esports")}
//             >
//               video
//             </Link>
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <Link
//               href="/"
//               className="text-sm font-semibold leading-6 text-gray-900"
//             >
//               Log in <span aria-hidden="true">&rarr;</span>
//             </Link>
//           </div>
//         </nav>

//         {/* Mobile Screens */}
//         <div role="dialog" aria-modal="true">
//           <div className={`${!toggle ? 'bg-white' : 'bg-white min-h-screen'} absolute flex flex-col lg:hidden right-0 z-10 w-full overflow-y-hidden px-6 py-4  lg:ring-1 lg:ring-gray-900/10 top-0 `}>
//             <div className="flex items-center justify-between ">

//               <div className="flex cursor-pointer">
//                 <Link href={'/'}>
//                   <h2 className="font-anton text-3xl flex justify-center items-center ">
//                     Jrbi
//                   </h2>
//                 </Link>
//               </div>
//               <button
//                 type="button"
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                 onClick={() => setToggle(!toggle)}
//               >
//                 {toggle ? (
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   <MenuIcon />
//                 )}
//               </button>
//             </div>
//             <div className={`${!toggle ? "hidden" : "flex"} mt-6 flow-root `}>
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   <div className="-mx-3">
//                     <button
//                       type="button"
//                       className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 hover:bg-white-100"
//                       aria-controls="disclosure-1"
//                       aria-expanded="false"
//                       onClick={() => setDropdown(!dropdown)}
//                     >
//                       Menu
//                       <svg
//                         className="h-5 w-5 flex-none"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         aria-hidden="true"
//                       >
//                         <path
//                           fill-rule="evenodd"
//                           d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                           clip-rule="evenodd"
//                         />
//                       </svg>
//                     </button>

//                     <div
//                       id="disclosure-1"
//                       className={`${!dropdown ? "hidden" : "flex flex-col"} `}
//                     >
//                       <Link
//                         href="#"
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                       >
//                         Our Service 
//                       </Link>

//                       <Link
//                         href="#"
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                       >
//                         Who can join us
//                       </Link>

//                       <Link
//                         href="#"
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                       >
//                         Interactive Blogs
//                       </Link>

//                       <Link
//                         href="#"
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                       >
//                         Our videos
//                       </Link>

//                       <Link
//                         href="#"
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                       >
//                         Research
//                       </Link>

//                       <Link
//                         href="#"
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                       >
//                         Contact us
//                       </Link>

//                       <Link
//                         href="#"
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                       >
//                         Our Team
//                       </Link>
//                     </div>
//                   </div>
//                   <Link
//                     href="#"
//                     className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Blogs
//                   </Link>
//                   <Link
//                     href="#"
//                     className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Assesments
//                   </Link>
//                   <Link
//                     href="#"
//                     className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Video
//                   </Link>
//                 </div>
//                 <div className="py-6">
//                   <Link
//                     href="#"
//                     className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-white-100"
//                   >
//                     Log in
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </header>
//     </>
//   );
// }

// export default Navbar;