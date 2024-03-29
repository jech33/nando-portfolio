"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import NandoLoader from "../lotties/NandoLoader";

const NandoSideImage = (
  props: ImageProps & {
    containerClassName?: string | null;
  },
) => {
  const { containerClassName, alt, ...imageProps } = props;
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
        <div className="absolute flex h-full w-full items-center bg-white">
          <NandoLoader />
        </div>
      )}
      <Image
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
