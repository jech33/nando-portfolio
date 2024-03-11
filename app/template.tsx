"use client";

import { motion } from "framer-motion";
import useRoutesStatus from "./_hooks/useRoutesStatus";
import Image from "next/image";
import Link from "next/link";

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
      className="flex h-[100svh] w-full max-h-[100svh] shadow-2xl bg-black"
      variants={variants}
      initial={isStatic ? "static" : "right"}
      animate={"static"}
      exit={"exitStatic"}
      transition={{ type: "just", duration: 0.5 }}
    >
      <div className="h-full w-1/2">{children}</div>
      <div className="relative h-full w-1/2">
        <Image
          className="object-cover"
          alt="nando-image-1"
          fill
          src="/assets/nando-image-1.png"
        />
        <Link href="/" className="absolute right-4 bottom-4">
          <Image
            src={"/assets/logo.svg"}
            height={52}
            width={52}
            alt="nandologia-logo"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default Template;
