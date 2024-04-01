import { routes } from "@/app/_routes/routes";
import PillContainer from "@/app/_ui/core/PillContainer";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import { workLabels } from "@/app/_utils/utils";
import Image from "next/image";

const Work4 = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage
          src={nandoAssets.MockupSwiftride1}
          alt="swiftride mockup"
          priority
          placeholder="blur"
          width={1920}
          height={1080}
        />
      }
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work3Learning,
        hrefNext: routes.work4Design,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <div className="flex flex-col gap-8">
            <Image src={nandoAssets.LogoSwiftride} alt={"swiftride logo"} />
            <Text tag="h1" variant="heading">
              A multi-platform solution for personal transportation.
            </Text>
          </div>
          <PillContainer labels={workLabels.work4} />
          <Text variant="heading3">What is it?</Text>
          <Text>
            SwiftRide is a <b>platform ecosystem</b> that allows users to
            request personal transportation from their smartphone or desktop.
          </Text>
          <Text variant="heading3">What was my role?</Text>
          <Text>
            I came as product designer to <b>redesign</b> a pre existing
            platform with plenty of improvement opportunities from a usability
            perspective.
          </Text>
          <Text>
            The ecosystem had <b>3 web apps and 1 mobile app</b>. They all
            needed to be redesigned in tandem, while still maintaining
            consistency and usability.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work4;
