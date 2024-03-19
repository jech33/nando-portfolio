import Image, { StaticImageData } from "next/image";
import React from "react";

const NandoLayoutSidePanel = ({ images }: { images: StaticImageData[] }) => {
  return (
    <>
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
    </>
  );
};

export default NandoLayoutSidePanel;
