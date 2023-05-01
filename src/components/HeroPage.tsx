"use client";
import { delay, motion } from "framer-motion";
import { useState } from "react";
import { heroDataType } from "@/utils/hero-data";
import Image from "next/image";
import "../app/globals.css";

const children = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 0.5,
    },
  },
};

export default function HeroPage({ title, sub, desc, img }: heroDataType) {
  const [staggerCount, setStaggerCount] = useState<number>(0);

  function increment(): void {
    setStaggerCount((s) => s++);
  }
  return (
    <main
      className={`px-2 md:px-12 min-h-screen max-w-full flex flex-wrap justify-between items-center lg:bg-right-bottom snap-start shrink-0 relative z-0`}
    >
      <Image
        className="heroImg"
        src={img}
        alt="dog running"
        fill
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.5 }}
        className=" w-full max-w-md shrink-0  flex flex-col gap-4 relative lg:ml-20 "
      >
        <motion.h1
          variants={children}
          className="text-yellow-500 text-4xl md:text-6xl font-bold uppercase tracking-wider"
        >
          {title}
        </motion.h1>
        <motion.h2
          variants={children}
          className="text-white font-mono text-xl md:text-2xl"
        >
          {sub}
        </motion.h2>
        <motion.p variants={children} className="text-white tracking-wide">
          {desc}
        </motion.p>
        <motion.button
          variants={children}
          className=" py-3 px-10 bg-gray-50 text-gray-600 self-start hover:bg-yellow-500 transition-colors duration-200"
        >
          Board now
        </motion.button>
      </motion.div>
      {/* <figure className=" grow h-2/3-screen  mx-auto basis-96 shrink-0 bg-nemo-black bg-contain bg-black bg-blend-darken bg-opacity-30    "></figure> */}
    </main>
  );
}
