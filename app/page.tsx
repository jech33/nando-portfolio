"use client";
import Image from "next/image";
import Link from "next/link";
import { nandoAssets, nandoSidePanelImages } from "./_utils/nandoAssets";
import useNandoAnimations from "./_hooks/useNandoAnimations";
import NandoLayout from "./_ui/layout/NandoLayout";
import { routes } from "./_routes/routes";
import Text from "./_ui/core/Text";

function Home() {
  const { setExitAnimationStatic } = useNandoAnimations();
  return (
    <NandoLayout images={nandoSidePanelImages.home}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-14">
        <div className="absolute right-7 top-[4.125rem] flex items-start gap-4">
          <Text variant="tooltip" className="w-[17rem]">
            Image to the right may take a bit to load
          </Text>
          <Image
            className="py-6"
            src={nandoAssets.ArrowRightDoodle}
            alt="line-doodle"
          />
        </div>
        <div className="headings-wrapper text-center">
          <h1 className="font-heading text-[5rem] font-[500]">
            Hernando Saieh
          </h1>
          <h2 className="mb-7 text-[2.625rem]">Product Designer Portfolio</h2>
          <Text tag="h3" variant="subheading">
            Embrace the creative flow
          </Text>
        </div>
        <div className="begin-container">
          <Link
            className="my-7 flex items-center gap-6 p-2"
            href={routes.about}
            onClick={() => {
              setExitAnimationStatic();
            }}
          >
            <span className="text-[46px] font-semibold text-primary">
              Begin
            </span>
            <Image src={nandoAssets.ArrowRight} alt="arrow-right" />
          </Link>
        </div>
        <div className="tooltip-container"></div>
        <Image
          className="absolute bottom-4 right-12"
          src={nandoAssets.CircleSquare}
          alt={"circle-square.svg"}
        />
      </div>
    </NandoLayout>
  );
}

export default Home;
