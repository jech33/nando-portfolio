"use client";
import DownChevronIcon from "../icons/DownChevronIcon";
import Text from "../core/Text";
import useScrollable from "@/app/_ui/hooks/useScrollable";

const NandoLayoutArticle = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isScrollable, scrollRef, handleScroll } = useScrollable();

  return (
    <div
      ref={scrollRef}
      className="no-scrollbar mb-32 mt-[4.75rem] flex h-full max-h-full flex-col items-center justify-center overflow-y-scroll pl-[4.375rem] pr-[3.25rem] 2xl:mt-32 2xl:pl-20 2xl:pr-28"
      onScroll={handleScroll}
    >
      {isScrollable && (
        <div className="absolute bottom-[88px] z-50 flex items-center gap-2">
          <DownChevronIcon size={24} className="animate-bounce" />
          <Text color="textSecondary" className="text-[16px] font-semibold">
            Scroll to continue
          </Text>
        </div>
      )}
      {children}
    </div>
  );
};

export default NandoLayoutArticle;
