"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { nandoIconsAssets } from "../_utils/nandoAssets";
import useNandoAnimations from "../_hooks/useNandoAnimations";

const NandoLayout = ({
  children,
  images,
}: Readonly<{
  children: React.ReactNode;
  images: StaticImageData[];
}>) => {
  const { setExitAnimationRight } = useNandoAnimations();
  return (
    <div className="h-full w-full flex shadow-2xl bg-background [&_b]:font-semibold">
      <Image
        className="absolute top-9 left-0"
        src={nandoIconsAssets.LineDoodle}
        alt="line-doodle"
      />
      <article className="relative h-full w-1/2 py-32 pl-20 pr-28 flex flex-col justify-center items-center shadow-lg">
        {children}
      </article>
      <div className="relative h-full w-1/2 overflow-hidden flex flex-col items-stretch justify-stretch bg-white">
        {images.map((image, index) => (
          <Image
            key={index}
            className="w-full h-full object-cover object-center flex-1"
            alt={`nando-image-${index}`}
            priority
            placeholder="blur"
            src={image}
          />
        ))}
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
