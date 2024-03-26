import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const Work2 = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage>
          <Image
            src={nandoAssets.MockupJoynup1}
            alt="joynup"
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
        hrefBack: routes.work1Learning,
        hrefNext: routes.work2Design,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <div className="flex flex-col gap-8">
            <Image src={nandoAssets.LogoJoynup} alt={"joynup logo"} />
            <Text tag="h1" variant="heading">
              A modern alternative to traditional marriage and divorce.
            </Text>
          </div>
          <Text variant="heading3">What is it?</Text>
          <Text>
            Joynup is a SaaS B2C web platform that helps couples discuss and
            form relationships, finances, and parenting agreements to strengthen
            connections and avoid conflict.
          </Text>
          <Text variant="heading3">What was my role?</Text>
          <Text>
            <b>I came in as the lead product designer for this project</b>.
            Besides from a logo sketch and an initial business approach, we were
            essentially starting from scratch.
          </Text>
          <Text>
            The client came with a layout of ideas but needed structure as to
            how the platform would work. We decided to do a sitemap and some
            user flows to illustrate the main actions to be performed. I also
            made wireframes to iterate on ideas quickly.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work2;
