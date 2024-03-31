"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import NandoLoader from "../lotties/NandoLoader";
import { twMerge } from "tailwind-merge";

const NandoSideImage = (
  props: ImageProps & {
    containerClassName?: string | null;
  },
) => {
  const { containerClassName, alt, className, ...imageProps } = props;
  const [loading, setLoading] = useState(true);
  return (
    <figure
      className={
        containerClassName === null
          ? ""
          : containerClassName ||
            "relative flex h-full w-full items-center justify-center overflow-hidden px-6 py-16"
      }
    >
      {loading && (
        <div className="pointer-events-none absolute flex h-full w-full items-center bg-white">
          <NandoLoader />
        </div>
      )}
      <Image
        className={twMerge("max-h-full max-w-full object-contain", className)}
        alt={alt || "side image"}
        onLoadStart={() => setLoading((prev) => true)}
        onLoad={(e) => {
          setLoading((prev) => false);
          if (imageProps.onLoad) {
            imageProps.onLoad(e);
          }
        }}
        {...imageProps}
      />
    </figure>
  );
};

export default NandoSideImage;
