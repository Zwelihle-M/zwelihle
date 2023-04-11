import React from "react";

import { motion } from "framer-motion";

const BackgroundShapes = () => {
  return (
    <div className="container">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration:4,
          ease: "easeInOut",
        }}
        className="relative flex justify-center items-center"
      >
        <div className="rounded-full  border-2 border-violet-600   h-[350px] w-[350px] mt-52 absolute " />
        <div className="rounded-full border-2 border-violet-600 h-[500px] w-[500px] absolute mt-52  " />
        <div className="rounded-full border-2 border-violet-600  h-[650px] w-[650px] absolute mt-52 " />
        <div className="rounded-full border-2 border-violet-600  h-[800px] w-[800px] absolute mt-52 animate-pulse" />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
        className="relative flex justify-center items-center"
      >
        <div className="square absolute border-2 border-violet-600  h-[350px] w-[350px] mt-52 " />
        <div className="square border-2 border-violet-600 h-[500px] w-[500px] absolute mt-52 " />
        <div className="square border-2 border-violet-600 h-[650px] w-[650px] absolute mt-52 " />
        <div className="square border-2 border-violet-600 h-[800px] w-[800px] absolute mt-52" />
      </motion.div>
    </div>
  );
};

export default BackgroundShapes;
