import { SectionWrapper } from "@/hoc";

import Image from "next/image";
import Link from "next/link";
function Chat() {
  return (
    <div className="flex flex-col dark:bg-black-100">
      <div className="flex flex-col justify-center items-center my-1">
        <h2 className=" border-2 border-gray-600 p-2 ">Make an appointment</h2>
        <p className="py-4 text-xl">Get your queries submitted here</p>

        <div className="flex flex-col lg:flex-row items-center">
          <Image
            src="/space-rover.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="flex flex-col gap-y-5 max-w-xl">
            <h2 className="font-semibold font-montserrat text-4xl">
              Connect with a counselor
            </h2>
            <p>
              The main researcher who is involved in this research intervention
              plan is also a registered & licensed counsellor. Click on the
              'Connect With Us' button below to get your queries answered or to
              book a session with the counselor
            </p>
            <Link href="/chat">
              <button className="flex flex-col my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Connect With Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Chat, "chat");
