"use client";
import Image from "next/image";
import Link from "next/link";
import { nandoIconsAssets, nandoImages } from "./_utils/nandoAssets";
import useNandoAnimations from "./_hooks/useNandoAnimations";
import NandoLayout from "./_ui/layout/NandoLayout";
import Text from "./_ui/core/Text";
import { routes } from "./_routes/routes";

function Home() {
  const { setExitAnimationStatic } = useNandoAnimations();
  return (
    <NandoLayout images={nandoImages.home}>
      <div className="flex flex-col gap-14 items-center justify-center h-full w-full">
        <div className="absolute right-7 top-[4.125rem] flex gap-4 items-start">
          <Text variant="tooltip" className="w-[17rem]">
            Image to the right may take a bit to load
          </Text>
          <Image
            className="py-6"
            src={nandoIconsAssets.ArrowRightDoodle}
            alt="line-doodle"
          />
        </div>
        <div className="headings-wrapper text-center">
          <h1 className="text-[5rem] font-heading font-[500]">
            Hernando Saieh
          </h1>
          <h2 className="text-[2.625rem] mb-7">Product Designer Portfolio</h2>
          <Text tag="h3" variant="subheading">
            Embrace the creative flow
          </Text>
        </div>
        <div className="begin-container">
          <Link
            className="flex gap-6 p-2 my-7 items-center"
            href={routes.about}
            onClick={() => {
              setExitAnimationStatic();
            }}
          >
            <span className="text-[46px] font-semibold text-primary">
              Begin
            </span>
            <Image src={nandoIconsAssets.ArrowRight} alt="arrow-right" />
          </Link>
        </div>
        <div className="tooltip-container"></div>
        <Image
          className="absolute bottom-4 right-12"
          src={nandoIconsAssets.CircleSquare}
          alt={"circle-square.svg"}
        />
      </div>
    </NandoLayout>
  );
}

export default Home;
