// client.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import useRoutesStatus from "../../_hooks/useRoutesStatus";
import { useNandoStore } from "../../_store/nandoStore";
import FrozenRoute from "./FrozenRoute";

const env = process.env.NODE_ENV;

// Client wraps any client/rsc components with AnimatePresence
export default function PageTransition({ children }: { children: ReactNode }) {
  const { isStatic, currentRouteIndex, isGoingBack } = useRoutesStatus();
  const pathname = usePathname();

  const variants = {
    static: { x: 0 },
    left: { x: "-100vw" },
    right: { x: "100vw" },
    exitStatic: { x: 0, z: 1 },
    exitRight: { x: "100vw", z: 2 },
  };

  const exitAnimation = useNandoStore((state) => state.exitAnimation);

  return (
    <AnimatePresence presenceAffectsLayout mode="popLayout">
      <motion.div
        key={pathname}
        className={`flex h-[100svh] w-full max-h-[100svh] bg-white`}
        variants={variants}
        initial={isStatic ? "static" : isGoingBack ? "static" : "right"}
        animate={"static"}
        exit={exitAnimation}
        transition={{ type: "just", duration: 0.5 }}
        style={{ zIndex: currentRouteIndex, position: "absolute" }}
      >
        {env === "development" ? (
          children
        ) : (
          <FrozenRoute>{children}</FrozenRoute>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
