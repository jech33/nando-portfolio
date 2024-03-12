"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { assetsImages } from "../_utils/nandoImages";
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
    <div className="h-full w-full flex shadow-2xl">
      <Image
        className="absolute top-6 left-0 z-0"
        src={assetsImages.LineDoodle}
        alt="line-doodle"
      />
      <article className="bg-background h-full w-1/2 p-5 flex flex-col justify-center items-center shadow-lg">
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
