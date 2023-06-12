import React from "react";
import { Standard } from "@typebot.io/react";
import Link from "next/link";
function chat() {
  return (
    <div>
      <Standard
        typebot="lead-generation-copy-to2m8tg"
        style={{ width: "100%", height: "100vh" }}
      />
      <Link href={"/"}>
        <div className="flex justify-center w-14 h-7 bg-black text-white px-14 rounded-md mx-auto cursor-pointer hover:bg-black-100 py-5 m-10 text-xs items-center">
          Go back{" "}
        </div>
      </Link>
    </div>
  );
}

export default chat;
