import Image from "next/image";
import Link from "next/link";
import { assetsImages, nandoImages } from "./_utils/nandoImages";
import NandoLayout from "./_ui/NandoLayout";

export default function Home() {
  return (
    <NandoLayout images={nandoImages.home}>
      <div className="flex flex-col gap-14 items-center justify-center relative h-full w-full">
        <div className="absolute right-0 top-14 flex gap-4 items-start">
          <p className="font-secondary text-primary text-[2.125rem] w-[17rem]">
            Image to the right may take a bit to load
          </p>
          <Image
            className="py-6"
            src={assetsImages.ArrowRightDoodle}
            alt="line-doodle"
          />
        </div>
        <div className="headings-wrapper text-center">
          <h1 className="text-[2rem] lg:text-[5rem] font-heading font-[500]">
            Hernando Saieh
          </h1>
          <h2 className="text-[2.625rem] mb-7">Product Designer Portfolio</h2>
          <p className="font-secondary text-[4rem] text-primary">
            Embrace the creative flow
          </p>
        </div>
        <div className="begin-container">
          <Link className="flex gap-6 p-2 my-7" href="/about">
            <span className="text-[46px] font-semibold text-primary">
              Begin
            </span>
            <Image
              src="/icons/arrow-right.svg"
              width={65}
              height={51}
              alt="arrow-right"
            />
          </Link>
        </div>
        <div className="tooltip-container"></div>
        <Image
          className="absolute bottom-0 right-0"
          src={assetsImages.CircleSquare}
          alt={"circle-square.svg"}
        />
      </div>
    </NandoLayout>
  );
}
