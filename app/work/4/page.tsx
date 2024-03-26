import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const Work4 = () => {
  return (
    <NandoLayout
      sideComponent={
        <div className="flex h-full w-full items-center justify-center overflow-hidden px-4">
          <Image
            src={nandoAssets.MockupSwiftride1}
            alt="swiftride mockup"
            priority
            placeholder="blur"
          />
        </div>
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
