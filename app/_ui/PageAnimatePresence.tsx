"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import FrozenRoute from "./FrozenRoute";

const PageAnimatePresence = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="popLayout">
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
        {/* {children} */}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
