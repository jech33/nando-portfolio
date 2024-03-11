import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <article className="bg-background h-full w-full p-5 flex flex-col justify-center items-center gap-16">
      <div className="headings-wrapper text-center">
        <h1 className="text-[5rem] font-[500]">Hernando Saieh</h1>
        <h2 className="text-[2.625rem] mb-6">Product Designer Portfolio</h2>
        <p className="font-secondary text-[4rem] text-primary">
          Embrace the creative flow
        </p>
      </div>
      <div className="begin-container">
        <Link className="flex gap-6 py-10" href="/about">
          <span className="text-[46px] font-semibold text-primary">Begin</span>
          <Image
            src="/icons/arrow-right.svg"
            width={65}
            height={51}
            alt="arrow-right"
          />
        </Link>
      </div>
      <div className="tooltip-container"></div>
    </article>
  );
}
