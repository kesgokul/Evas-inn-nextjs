"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MutableRefObject } from "react";

const options = {
  root: null,
  threshold: 0.1,
};

export default function Header() {
  const headerRef = useRef<HTMLElement>();
  const [isVisible, setIsVisible] = useState<Boolean>(true);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`${
        isVisible ? "absolute" : "fixed"
      } top-0 left-0 w-full py-5 bg-transparent flex justify-center border-b border-gray-200 bg-opacity-10 bg-white`}
    >
      <h1>Eva's Inn</h1>
    </motion.main>
  );
}
