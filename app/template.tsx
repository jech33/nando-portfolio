"use client";

import { motion } from "framer-motion";
import useRoutesStatus from "./_hooks/useRoutesStatus";
import Image from "next/image";
import Link from "next/link";
import { useNandoStore } from "./_store/nandoStore";

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isStatic } = useRoutesStatus();

  const variants = {
    static: { x: 0 },
    left: { x: "-100vw" },
    right: { x: "100vw" },
    exitStatic: { x: 0, z: 1 },
    exitRight: { x: "100vw", z: 2 },
  };

  return (
    <motion.div
      className="flex h-[100svh] w-full max-h-[100svh] bg-white"
      variants={variants}
      initial={isStatic ? "static" : "right"}
      animate={"static"}
      exit={"exitStatic"}
      transition={{ type: "just", duration: 0.5 }}
    >
      <div className="h-full w-full shadow-2xl">{children}</div>
    </motion.div>
  );
};

export default Template;
