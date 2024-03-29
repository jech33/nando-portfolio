import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import NandoLoader from "@/app/_ui/lotties/NandoLoader";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";
import React, { useState } from "react";

const SideComponent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 overflow-hidden">
      {imagesLoaded < 2 && (
        <div className="absolute flex h-full w-full items-center bg-white">
          <NandoLoader />
        </div>
      )}
      <div className="flex flex-col items-center gap-6">
        <Text variant="caption">
          Desktop Screens.{" "}
          <Link
            className="font-medium"
            target="_blank"
            href="https://xd.adobe.com/view/03f4b84c-44c9-404f-97dc-a54a6ac97f2f-56a7/?fullscreen&hints=off"
          >
            View Prototype
          </Link>
        </Text>
        <Image
          className="max-h-[400px] object-contain"
          src={nandoAssets.MockupMillave2}
          alt="millave mockup 2"
          priority
          placeholder="blur"
          width={1920}
          height={1080}
          onLoad={() => setImagesLoaded((prev) => prev + 1)}
        />
      </div>
      <div className="flex max-h-[50%] flex-col items-center gap-6">
        <Text variant="caption">
          Mobile Screens.{" "}
          <Link
            className="font-medium"
            target="_blank"
            href="https://xd.adobe.com/view/34a12fe4-0f3b-4225-aeb9-09c7a0f4baf1-61f2/screen/b16a557a-e754-455a-88c7-4741d0578672?fullscreen&hints=off"
          >
            View Prototype
          </Link>
        </Text>
        <Image
          className="max-h-[400px] object-contain"
          src={nandoAssets.MockupMillave3}
          alt="millave mockup 2"
          priority
          placeholder="blur"
          width={1920}
          height={1080}
          onLoad={() => setImagesLoaded((prev) => prev + 1)}
        />
      </div>
    </div>
  );
};

export default SideComponent;
