import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const Work3 = () => {
  return (
    <NandoLayout
      sideComponent={
        <div className="flex h-full w-full items-center justify-center overflow-hidden px-4">
          <Image
            src={nandoAssets.MockupCaresync1}
            alt="caresync"
            priority
            placeholder="blur"
          />
        </div>
      }
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work2Learning,
        hrefNext: routes.work3Design,
      }}
    >
      <NandoLayoutArticle>
        <div className="flex h-full flex-col items-start gap-6">
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
        </div>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work3;
