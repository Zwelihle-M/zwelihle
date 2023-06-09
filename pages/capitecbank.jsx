import Image from "next/legacy/image";
import React from "react";
import CapitecMockup from "../public/images/CapitecMockup.png";
import Snap1 from "../public/images/snap1.png";
import Snap2 from "../public/images/snap2.png";
import { FaGithub, FaReact, FaPlay } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import Link from "next/link";

const capitecbank = () => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href={"/"}>
            <div className="flex items-center justify-center my-4 sm:my-8 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
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

        {/* <h1 className="text-4xl mt-4 sm:mt-2 mb-4 sm:mb-8 text-center">
          Takealot Clone
        </h1> */}

        <div className="relative mx-auto overflow-hidden my-4 sm:my-8 h-60 sm:h-96 w-full sm:w-96">
          <Image
            src={CapitecMockup}
            alt="takealot clone"
            layout="responsive"
            objectFit="contain"
            quality={100}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            loading="lazy"
          />
        </div>

        <h2 className="text-center my-4 text-3xl">Description</h2>

        <p className="px-4 sm:px-0 mx-auto text-left">
          I had the pleasure of building a simplified version of Capitec Bank
          {"'"}s website using Next.js and Tailwind CSS. The purpose of the
          project was to create a platform that could be easily used on-the-go,
          making banking faster, safer, and more convenient for users. The
          website was designed with a clean and intuitive user interface,
          allowing customers to perform their transactions quickly and easily.
          With a focus on usability and accessibility, the website is optimized
          for use on mobile devices, ensuring that customers can bank from
          anywhere at any time. Overall, the website provides a hassle-free
          banking experience for customers, offering a secure and reliable
          platform that meets their needs and exceeds their expectations
        </p>

        {/* tech stack */}
        <div
          className="technologies my-4 sm:my-8"
          style={{ animationDuration: "5s" }}
        >
          <h2 className="text-center mb-2 text-3xl">Technologies Used</h2>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <span>
                <FaReact size={30} className="animate-spin  animate-1000" />
              </span>
            </li>
            <li>
              <span>
                <SiTailwindcss size={30} />
              </span>
            </li>

            <li>
              <span>
                <SiNextdotjs size={30} />
              </span>
            </li>

            <li>
              <span>
                <SiJavascript size={30} />
              </span>
            </li>
          </ul>
        </div>

        <div>
          {/* <Image
            src={Snap1}
            alt="takealot clone"
            layout="responsive"
            objectFit="contain"
            priority
            quality={100}

            className="rounded-lg"
          /> */}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href={"https://github.com/Zwelihle-M/next-capitec-bank"}>
            <button className="flex items-center rounded-full bg-gradient-to-r from-fuchsia-800 to-violet-600 py-2 px-2 mt-4 mr-4 text-white hover:scale-110 duration-200">
              Github
              <span className="ml-2">
                <FaGithub />
              </span>
            </button>
          </Link>

          <Link href={"https://next-capitec-bank.vercel.app/"}>
            <button className="flex items-center rounded-full bg-gradient-to-r from-fuchsia-800 to-violet-600 py-2 px-3 mt-4 mr-4 text-white hover:scale-110 duration-200">
              Link
              <span className="ml-2">
                <FaPlay />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default capitecbank;
