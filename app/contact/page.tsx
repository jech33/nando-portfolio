import { nandoAssets, nandoSidePanelImages } from "../_utils/nandoAssets";
import NandoLayout from "../_ui/layout/NandoLayout";
import Text from "../_ui/core/Text";
import Link from "../_ui/core/Link";
import Image from "next/image";
import { routes } from "../_routes/routes";

export default function About() {
  return (
    <NandoLayout
      images={nandoSidePanelImages.contact}
      navProps={{
        hasArrowNavigation: true,
        hrefBack: routes.work1Learning,
      }}
    >
      <div className="no-scrollbar flex h-full flex-col items-center justify-center gap-20 overflow-y-scroll pb-16 text-center">
        <Image
          className="absolute top-12"
          src={nandoAssets.CircleSquare}
          alt="circle-square.svg"
        />
        <div className="mt-52 flex flex-col gap-5">
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
