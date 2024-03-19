"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { nandoIconsAssets } from "../../_utils/nandoAssets";
import useNandoAnimations from "../../_hooks/useNandoAnimations";
import ArrowNavigation from "../core/ArrowNavigation";
import NandoLayoutSidePanel from "./NandoLayoutSidePanel";
import Navbar from "../core/Navbar";

type NandoLayoutProps = Readonly<{
  children: React.ReactNode;
  navProps?: {
    hasArrowNavigation: boolean;
    hasNavbar?: boolean;
    hrefNext?: string;
    hrefBack?: string;
  };
  images: StaticImageData[];
}>;

const NandoLayout = ({
  children,
  navProps = {
    hasNavbar: false,
    hasArrowNavigation: false,
  },
  images,
}: NandoLayoutProps) => {
  const { setExitAnimationRight } = useNandoAnimations();
  const { hrefNext, hrefBack, hasArrowNavigation, hasNavbar } = navProps;
  return (
    <div className="h-full w-full flex shadow-2xl bg-background [&_b]:font-semibold">
      <Image
        className="absolute top-9 left-0"
        src={nandoIconsAssets.LineDoodle}
        alt="line-doodle"
      />
      <article className="relative h-full w-1/2 flex flex-col justify-center items-center shadow-lg">
        {children}
        {hasArrowNavigation && (
          <ArrowNavigation hrefNext={hrefNext} hrefBack={hrefBack} />
        )}
        {hasNavbar && <Navbar />}
      </article>
      <div className="relative h-full w-1/2 overflow-hidden flex flex-col items-stretch justify-stretch bg-white">
        <NandoLayoutSidePanel images={images} />
        <Link
          href="/"
          className="absolute right-4 bottom-4"
          onClick={() => {
            setExitAnimationRight();
          }}
        >
          <Image
            src={"/assets/logo.svg"}
            height={52}
            width={52}
            alt="nandologia-logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default NandoLayout;
