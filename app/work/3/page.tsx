import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const Work3 = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage>
          <Image
            src={nandoAssets.MockupCaresync1}
            alt="caresync"
            priority
            placeholder="blur"
            width={1920}
            height={1080}
          />
        </NandoSideImage>
      }
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work2Learning,
        hrefNext: routes.work3Design,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <div className="flex flex-col gap-8">
            <Image src={nandoAssets.LogoCaresync} alt={"caresync logo"} />
            <Text tag="h1" variant="heading">
              Specialized, online medical attention from your desktop.
            </Text>
          </div>
          <Text variant="heading3">What is it?</Text>
          <Text>
            CareSync offers specialized medical care for a variety of patients.
          </Text>
          <Text variant="heading3">What was my role?</Text>
          <Text>
            Arriving as a product designer on this project, the main task was to
            <b>design a new calendar feature</b> for the existing platform.
          </Text>
          <Text>
            Although the platform was up and running, having no dedicated design
            work meant there were no pre existing design files to work from. My
            first task was{" "}
            <b>creating a design system based on what was already there</b>,
            improving specific elements upon detecting them.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work3;
