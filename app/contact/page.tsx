import { nandoIconsAssets, nandoImages } from "../_utils/nandoAssets";
import NandoLayout from "../_ui/layout/NandoLayout";
import Text from "../_ui/core/Text";
import Link from "../_ui/core/Link";
import Image from "next/image";
import { routes } from "../_routes/routes";

export default function About() {
  return (
    <NandoLayout
      images={nandoImages.contact}
      navProps={{
        hasArrowNavigation: true,
        hrefBack: routes.work1Learning,
      }}
    >
      <div className="flex flex-col gap-20 h-full pb-16 overflow-y-scroll no-scrollbar items-center justify-center text-center">
        <Image
          className="absolute top-12"
          src={nandoIconsAssets.CircleSquare}
          alt="circle-square.svg"
        />
        <div className="flex flex-col gap-5 mt-52">
          <Text variant="heading">Let’s talk!</Text>
          <Text>
            You can find me on{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/hsaieh/"
              className="font-normal"
            >
              LinkedIn
            </Link>
            <br />
            or hit me up at <b>nandosadi@gmail.com</b>.
          </Text>
        </div>
        <Text variant="tooltip">
          &quot;You can&apos;t understand good design if you do not understand
          people; design is made for people.&quot;
          <br />
          <br />
          Dieter Rams
        </Text>
      </div>
    </NandoLayout>
  );
}
