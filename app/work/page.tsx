"use client";
import Image from "next/image";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import NandoLayout from "../_ui/layout/NandoLayout";
import { nandoAssets, nandoSidePanelImages } from "../_utils/nandoAssets";
import useNandoAnimations from "../_hooks/useNandoAnimations";
import OrderedList from "../_ui/core/OrderedList";
import { workMainRoutesMap } from "../_routes/routes";

export default function Work() {
  const { setExitAnimationStatic } = useNandoAnimations();

  const projects = workMainRoutesMap.slice(1);

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
      <section className="mb-32 flex h-full flex-col items-center justify-center gap-8 px-32 text-center 2xl:mb-52 2xl:gap-20">
        <Text tag="h1" variant="heading">
          My Projects
        </Text>
        <OrderedList>
          {projects.map((project) => (
            <li key={project.path}>
              <div className="flex items-center justify-between">
                <Text tag="h2" variant="heading2">
                  {project.label}
                </Text>
                <Link
                  href={project.path}
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
          className="2xl:bottom-30 absolute bottom-28 max-w-[43.25rem] px-6 2xl:px-0"
          variant="tooltip"
        >
          Pro Tip: You can also navigate the portfolio and come back to this
          index by using the controls below.
          <Image
            className="relative -bottom-[1.25rem] -left-8 !hidden -rotate-[75deg] -scale-x-[1] 2xl:block tall:!block"
            src={nandoAssets.CurvedLineDoodle}
            alt="curved arrow doodle"
          />
        </Text>
      </section>
    </NandoLayout>
  );
}
