"use client";
import Image from "next/image";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import NandoLayout from "../_ui/layout/NandoLayout";
import { nandoAssets, nandoSidePanelImages } from "../_utils/nandoAssets";
import useNandoAnimations from "../_hooks/useNandoAnimations";
import OrderedList from "../_ui/core/OrderedList";

export default function Work() {
  const { setExitAnimationStatic } = useNandoAnimations();
  const projects = [
    {
      title: "millave",
      href: "/work/1",
    },
    {
      title: "Joynup",
      href: "/work/2",
    },
    {
      title: "CareSync",
      href: "/work/3",
    },
    {
      title: "SwiftRide",
      href: "/work/4",
    },
    {
      title: "Luna",
      href: "/work/5",
    },
  ];
  return (
    <NandoLayout
      images={nandoSidePanelImages.work}
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: "/about",
        hrefNext: "/work/1",
      }}
    >
      <section className="mb-32 flex h-full flex-col items-center justify-center gap-8 px-32 text-center 2xl:gap-20">
        <Text tag="h1" variant="heading">
          My Projects
        </Text>
        <OrderedList>
          {projects.map((project) => (
            <li key={project.title}>
              <div className="flex items-center justify-between">
                <Text tag="h2" variant="heading2">
                  {project.title}
                </Text>
                <Link
                  href={project.href}
                  onClick={() => {
                    setExitAnimationStatic();
                  }}
                >
                  <Image
                    src={nandoAssets.ArrowRight}
                    alt="arrow-right"
                    height={32}
                  />
                </Link>
              </div>
            </li>
          ))}
        </OrderedList>
        <Text
          className="absolute bottom-20 max-w-[43.25rem] px-6 2xl:bottom-60 2xl:px-0"
          variant="tooltip"
        >
          Pro Tip: You can also navigate the portfolio and come back to this
          index by using the controls below.
          <Image
            className="absolute -bottom-[8.25rem] -left-8 hidden -rotate-[75deg] -scale-x-[1] 2xl:block"
            src={nandoAssets.CurvedLineDoodle}
            alt="curved arrow doodle"
          />
        </Text>
      </section>
    </NandoLayout>
  );
}
