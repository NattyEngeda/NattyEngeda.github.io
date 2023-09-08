import React from "react";
import Typewriter from 'typewriter-effect';
import TypeWriterText from "../components/TypeWriterText";

export default function Index() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-5 py-10">
        <div className="container px-10 grid grid-cols-2 gap-10">

          {/* Name */}
          <div
            className="text-white text-4xl flex flex-col gap-10 items-start justify-center border-white border h-96 px-5 font-VT323 font-bold">
            <TypeWriterText text='Hello There!,' pauseFor={2900} />
            <p>I'm {" "}
              <span className="text-primary-500 link-underline">Natty.Engeda</span></p>

          </div>

          {/* Some Image */}
          <div>

          </div>

        </div>
      </div>
    </>
  );
}
