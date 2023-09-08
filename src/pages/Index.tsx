import React from "react";
import Typewriter from 'typewriter-effect';
import TypeWriterText from "../components/TypeWriterText";

export default function Index() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-5 py-10">

        {/* First Section */}
        <div className="container px-5 md:px-10 grid grid-colrs-1 md:grid-cols-2 gap-10">
          {/* Name */}
          <div
            className="text-white text-4xl flex flex-col gap-10 items-start justify-center border-white border h-96 px-5 font-VT323 font-bold shadow-xl shadow-gray-700">
            {/* <TypeWriterText text='Hello There!,' pauseFor={3900} /> */}
            {/* <TypeWriterText text='<p>I am <span style="color:#34568b" className="text-primary-500 link-underline">Natty.Engeda</span></p>' pauseFor={3900} /> */}
            <p>Hello There!, </p>
            <p>I am <span className="text-primary-500 link-underline">Natty.Engeda</span></p>
          </div>

          {/* Some Image */}
          <div>
          </div>
        </div>

        {/* Second Sections */}
        <div className="container px-10">

        </div>

      </div>
    </>
  );
}
