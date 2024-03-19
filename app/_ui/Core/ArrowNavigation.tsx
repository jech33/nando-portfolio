"use client";
import { nandoIconsAssets } from "@/app/_utils/nandoAssets";
import Link from "next/link";
import Image from "next/image";
import useNandoAnimations from "@/app/_hooks/useNandoAnimations";

const ArrowNavigation = ({
  hrefNext,
  hrefBack,
}: {
  hrefNext: string;
  hrefBack: string;
}) => {
  const { setExitAnimationRight, setExitAnimationStatic } =
    useNandoAnimations();
  return (
    <div className="arrow-navigation__container px-6 py-3 flex gap-4 items-center absolute bottom-8 right-0">
      <Link href={hrefBack} onClick={() => setExitAnimationRight()}>
        <Image
          className="rotate-180"
          src={nandoIconsAssets.ArrowRight}
          height={24}
          width={24}
          alt="next arrow"
        />
      </Link>
      <Link href={hrefNext} onClick={() => setExitAnimationStatic()}>
        <Image
          src={nandoIconsAssets.ArrowRight}
          alt="next arrow"
          height={24}
          width={24}
        />
      </Link>
    </div>
  );
};

export default ArrowNavigation;
