import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type NandoLayoutSidePanelProps =
  | { images?: StaticImageData[]; sideComponent?: never }
  | { sideComponent?: ReactNode; images?: never };

const NandoLayoutSidePanel = (props: NandoLayoutSidePanelProps) => {
  const { images, sideComponent: component } = props;

  const maxHeight = images?.length ? 100 / images.length : 100;

  const maxHeightClass = `max-h-[${maxHeight}%]`;

  return (
    <>
      {images &&
        images.map((image, index) => (
          <Image
            key={index}
            className={twMerge(
              "h-full w-full flex-1 object-cover object-center",
              maxHeightClass,
            )}
            alt={`nando-image-${index}`}
            priority
            placeholder="blur"
            src={image}
          />
        ))}
      {component && component}
    </>
  );
};

export default NandoLayoutSidePanel;
