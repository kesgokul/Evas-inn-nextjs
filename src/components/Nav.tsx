import { motion } from "framer-motion";
import { useState } from "react";

const navItems = {
  //   hidden: {
  //     opacity: 0,
  //   },
  inactive: {
    opacity: 1,
    scale: 1,
  },
  active: {
    opacity: 1,
    scale: 1.2,
    transition: {
      ease: "linear",
      duration: 0.05,
    },
  },
};

const animateNavText = {
  opacity: [0, 1],
  x: [-100, 0],
};

type Props = {
  navActive: boolean;
};

export default function Nav({ navActive }: Props) {
  return (
    <main className="flex flex-col items-center justify-between mb-auto ">
      <motion.ul
        layout
        className="flex justify-between items-center lg:flex-col gap-2"
      >
        <motion.li
          variants={navItems}
          initial={"inactive"}
          whileHover={"active"}
          whileFocus={"active"}
          className="w-4 h-4 bg-white rounded-sm"
        >
          {navActive && <span className="ml-6">Facilities</span>}
        </motion.li>
        <motion.li
          variants={navItems}
          whileHover={"active"}
          whileFocus={"active"}
          className="w-4 h-4 bg-white rounded-sm"
        >
          {navActive && <span className="ml-6">Facilities</span>}
        </motion.li>
        <motion.li
          variants={navItems}
          whileHover={"active"}
          whileFocus={"active"}
          className="w-4 h-4 bg-white rounded-sm"
        >
          {navActive && <span className="ml-6">Activities</span>}
        </motion.li>
        <motion.li
          variants={navItems}
          whileHover={"active"}
          whileFocus={"active"}
          className="w-4 h-4 bg-white rounded-sm"
        >
          {navActive && <span className="ml-6">Tariff</span>}
        </motion.li>
      </motion.ul>
    </main>
  );
}
