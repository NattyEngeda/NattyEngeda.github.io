import React from "react";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
// Images 
import programmer from './../assets/images/programmer.png'
import face_iamge from './../assets/images/face_image_2.png'

// Icons 

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram
} from 'react-icons/ai';

export default function Index() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-5 md:py-10">

        {/* First Section */}
        <div className="container px-5 md:px-20 md:py-20 grid grid-colrs-1 md:grid-cols-2 gap-10">
          {/* Name */}
          <div
            className="text-white text-4xl md:text-6xl flex flex-col gap-5 md:gap-14 items-start justify-center py-10 md:py-0 md:h-96 px-5 md:px-10 font-VT323 font-bold ">
            <p>Hello There!, </p>
            <p>I am <span className="text-secondary-500 link-underline">Natty.Engeda</span></p>
          </div>

          {/* Some Image */}
          <div className="w-full flex flex-row items-center justify-center">
            <img
              className=" w-full md:w-96 h-auto"
              src={programmer}
              alt="Programmer Image" />
          </div>
        </div>

        <div className="w-2/3 mx-auto">
          <hr />
        </div>

        {/* Second Sections */}
        <div className="container mx-auto md:px-20 px-5 md:py-10">
          <div className="text-white flex flex-row gap-2 md:gap-5 font-VT323 md:font-bold text-xl md:text-6xl">
            <p>I am</p>
            <div className="text-secondary-500">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Freelancer",
                    "Full Stack Developer",
                    "Website Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>

          </div>

        </div>

        <div className="w-2/3 mx-auto">
          <hr />
        </div>


        {/* Third Section */}
        <div className="contianer w-full px-5 md:px-20 md:py-10 mx-auto grid grid-cols-1 md:grid-cols-5 gap-5 ">

          <div className="text-white flex flex-col gap-10 items-center col-span-3">
            <h1 className="text-secondary-500 font-VT323 text-2xl md:text-5xl font-bold text-underline-white">About Me</h1>
            <div className="w-full flex flex-col items-start justify-start gap-3 md:gap-8 font-VT323 md:text-lg">
              <p>I fell in love with programming and been obssesed with it since grade 11...</p>
              <p>I am fluent in programming languages like <span className="text-secondary-500 font-bold">C++, Javascript, PHP</span></p>
              <p>My field of interest currently is <span className="text-secondary-500 font-bold">Website Development</span> and <span className="text-secondary-500 font-bold">Mobile App Development</span></p>
              <p>I have been a part of different Contratual and Freelance Projects <span className="text-secondary-500 font-boold">See More...</span></p>
            </div>
          </div>

          <div className="col-span-2 w-full flex items-center justify-center p-10">
            <Tilt>
              <div>
                <img
                  className="w-full h-auto md:w-80 md:h-80 rounded-full bg-secondary-700"
                  src={face_iamge}
                  alt="Natnael Engeda" />
              </div>
            </Tilt>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="container w-full px-10 md:px-20 flex flex-col gap-1 md:gap-3 text-white items-center justify-start">
          <div className="text-3xl md:text-5xl font-VT323">
            <p>Find me On</p>
          </div>
          <div className="text-lg md:text-xl">
            <p>Feel free to contact me</p>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-5 py-5">
            <AiOutlineGithub
              className="icons-style"
              onClick={() => {
                window.open("https://www.github.com/nattyengeda");
              }} />
            <AiOutlineTwitter
              className="icons-style"
              onClick={() => {
                window.open("https://www.twitter.com/nattyengeda")
              }} />
            <AiFillLinkedin
              className="icons-style"
              onClick={() => {
                window.open("https://www.linkedin.com/in/natnael-engeda-9202a51b7/")
              }}
            />
            <AiOutlineInstagram
              className="icons-style"
              onClick={() => {
                window.open("https://www.instagram.com/nattyengeda")
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
