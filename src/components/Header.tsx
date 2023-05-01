"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MutableRefObject } from "react";
import Nav from "./Nav";

import { Castoro } from "next/font/google";
const castoroFont = Castoro({ subsets: ["latin"], weight: ["400"] });

const options = {
  root: null,
  threshold: 0.1,
};

export default function Header() {
  const headerRef = useRef<HTMLElement>();
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const [navActive, setNavActive] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      !entry.isIntersecting && setIsVisible(entry.isIntersecting);
      console.log(isVisible);
    });
    observer.observe(headerRef.current as Element);
  }, []);
  return (
    <motion.main
      ref={headerRef}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      onMouseEnter={() => setNavActive(true)}
      onMouseLeave={() => setNavActive(false)}
      className={`${"fixed"} top-0 left-0 w-full py-5 bg-transparent flex justify-center border-b border-gray-200 bg-opacity-10 bg-white z-10
        lg:bottom-0 ${
          navActive ? "lg:w-auto" : "lg:w-20"
        } lg:flex-col lg:justify-center lg: lg:bg-orange-400 lg:bg-opacity-50 lg:hover:bg-opacity-95 transition-colors duration-200 ease-in-out
      `}
    >
      <h1
        className={`lg:mb-auto w-full text-2xl text-center font-bold uppercase text-black ${castoroFont.className}`}
      >
        Eva's <span className="text-yellow-400">Inn</span>
      </h1>
      <Nav navActive={navActive} />
    </motion.main>
  );
}
