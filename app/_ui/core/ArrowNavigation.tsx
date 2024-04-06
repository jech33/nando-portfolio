"use client";
import { nandoAssets } from "@/app/_ui/_utils/nandoAssets";
import Link from "next/link";
import Image from "next/image";
import useNandoAnimations from "@/app/_ui/hooks/useNandoAnimations";

const ArrowNavigation = ({
  hrefNext,
  hrefBack,
}: {
  hrefNext?: string;
  hrefBack?: string;
}) => {
  const { setExitAnimationRight, setExitAnimationStatic } =
    useNandoAnimations();

  const disabledClass = "opacity-50 cursor-not-allowed";
  const backDisabled = !hrefBack ? disabledClass : "";
  const nextDisabled = !hrefNext ? disabledClass : "";
  return (
    <div className="arrow-navigation__container ml-auto flex items-center gap-4 py-3">
      <Link
        className={backDisabled}
        href={hrefBack || ""}
        onClick={() => setExitAnimationRight()}
      >
        <Image
          className="rotate-180"
          src={nandoAssets.ArrowRight}
          alt="next arrow"
          height={24}
        />
      </Link>
      <Link
        className={nextDisabled}
        href={hrefNext || ""}
        onClick={() => setExitAnimationStatic()}
      >
        <Image src={nandoAssets.ArrowRight} alt="next arrow" height={24} />
      </Link>
    </div>
  );
};

export default ArrowNavigation;
