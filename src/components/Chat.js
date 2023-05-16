import { SectionWrapper } from "@/hoc";

import Image from "next/image";
import Link from "next/link";
function Chat() {
  return (

    <div className="flex flex-col dark:bg-black-100">
      <div className="flex flex-col justify-center items-center my-1">
        <h2 className=" border-2 border-gray-600 p-2 ">Chat Bot</h2>
        <p className="py-4 text-xl">Make an Appointment with our chat system</p>
        
      <div className="flex flex-col lg:flex-row items-center">
      <Image
          src="/space-rover.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="flex flex-col gap-y-5 max-w-xl">
        <h2 className="font-semibold font-montserrat text-4xl">Book a Doctor</h2>
        <p>Easy way to make an Appointment with a doctor. Meet us with Google Meet or in physical Clinic.</p>
        <Link href="/chat"><button className="flex flex-col my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Schedule Appointment</button></Link></div>

      </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Chat, "chat");
