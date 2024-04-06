"use client";
import { useEffect, useRef, useState } from "react";

const useScrollable = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const isBottom =
      scrollRef.current.scrollHeight - (scrollRef.current.scrollTop + 1) <=
      scrollRef.current.clientHeight;

    if (isBottom) {
      setIsScrollable(false);
    } else {
      setIsScrollable(true);
    }
  };

  useEffect(() => {
    if (!scrollRef.current) return;

    if (scrollRef.current.scrollHeight > scrollRef.current.clientHeight) {
      setIsScrollable(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollRef.current]);
  return {
    isScrollable,
    scrollRef,
    handleScroll,
  };
};

export default useScrollable;
