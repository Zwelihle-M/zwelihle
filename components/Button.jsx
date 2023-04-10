import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href={"/resume.txt"} download={true}>
      <button className="relative inline-flex items-center justify-center my-12 p-4 px-5 py-3 overflow-hidden transition duration-300 ease-in-out rounded-full shadow-xl group hover:scale-105">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-fuchsia-800 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">Download CV</span>
      </button>
    </Link>
  );
};

export default Button;
