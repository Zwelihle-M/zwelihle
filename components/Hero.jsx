import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Emoji from "../public/images/Emoji.svg";
import BackgroundShapes from "./BackgroundShapes";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome",
      "Zwelihle Masango",
      "Software Engineer",
      "UI/UX Web Designer",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 60,
  });

  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col space-y-8 items-center justify-center text-center hero"
    >
      <BackgroundShapes />

      {/* bubble head */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      >
        <Image src={Emoji} alt="emoji placeholder" priority quality={100}
        
        width={471}  height={467}
        
        
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        }}
        transition={{
          duration: 2.5,
        }}
        style={{
          zIndex:10
        }}
      >
        <h1 className="text-5xl lg:text-6xl px-10 font-semibold" >
          <span className="text-transparent bg-clip-text bg-gradient-to-bl from-fuchsia-500 to-violet-500">
            {text}
          </span>
          <Cursor cursorColor="#7F00FF" />
        </h1>

        <div className="pt-5"></div>
      </motion.div>

      {/* arrow bounce down to about dont forget */}
    </section>
  );
};

export default Hero;
