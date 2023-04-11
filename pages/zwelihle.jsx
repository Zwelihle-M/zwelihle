import Link from "next/link";
import React from "react";
import Krk5StudioMonitor from "../components/Krk5StudioMonitor";
import MsiGamingLaptop from "../components/MsiGamingLaptop";

const zwelihle = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center ">
      <div className="flex">
        <Link href={"/"}>
          <div className="flex items-center justify-center my-4 sm:my-8 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>{" "}
            <span>Back</span>
          </div>
        </Link>
      </div>
      <h1 className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-violet-600">
        Zwelihle Masango
      </h1>
      <div className="my-8 px-8">
        <p className="py-2 max-w-2xl mx-auto text-md text-left">
          My full name is Senzo Zwelihle Masango, and i am 22-year-old software
          developer. My passion for coding started when I was still in high
          school,I was in a music group and wanted to make our music accesible
          and tried to make an mobile application with little to none knowledge
          of any programming language and came across android studio, not
          knowing it would change everything; I used to think coding was just
          drag and drop i was stuck trying to figure it out for months from that
          moment on, I became obsessed with understanding coding, and after
          doing reasearch only then i discovered what i actually need to do and
          how to do it. fell in love with the programming language java and
          javascript and eventually decided to enroll for software
          development...throught my life i always thought i would be a musician
          or an artist but my love for coding previals, maybe someday i will be
          all
        </p>

        <div className="w-full h-[600px] cursor-grab">
          <Krk5StudioMonitor />
        </div>
      </div>

      <div className="my-8 px-8">
        <p className="py-2 max-w-2xl mx-auto text-md text-left">
          I continued to learn and hone my skills through research and practice,
          and eventually decided to enroll in a software development program. It
          was during this time that I realized my true passion for coding and
          discovered that it was more than just a hobby. Coding has become an
          integral part of my life, and I am constantly seeking new challenges
          and opportunities to grow as a developer. I am excited to explore new
          opportunities and challenges in the field of software development, and
          I believe that my skills, knowledge, and passion for coding make me an
          ideal candidate.
        </p>

        <div className="w-full h-[600px] cursor-grab">
          <MsiGamingLaptop />
        </div>
      </div>

      <div>
        <p className="py-2 max-w-2xl mx-auto text-md  text-left">
          Thank you for taking the time to view my portfolio! As a passionate
          and dedicated developer, I am thrilled to have the opportunity to
          share my work with you. I hope that you found everything informative
          and engaging, and that you are just as excited about my projects as I
          am. If you have any questions or would like to discuss potential job
          oppoturnities or collaborations, please feel free to reach out to me.
        </p>
      </div>
    </section>
  );
};

export default zwelihle;
