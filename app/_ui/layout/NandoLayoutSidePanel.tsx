import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

export type NandoLayoutSidePanelProps =
  | { images?: StaticImageData[]; sideComponent?: never }
  | { sideComponent?: ReactNode; images?: never };

const NandoLayoutSidePanel = (props: NandoLayoutSidePanelProps) => {
  const { images, sideComponent: component } = props;

  return (
    <>
      {images &&
        images.map((image, index) => (
          <Image
            key={index}
            className="h-full w-full flex-1 object-cover object-center"
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
