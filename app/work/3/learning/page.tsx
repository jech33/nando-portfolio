import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const SideComponent = (
  <NandoSideImage>
    <Image
      className="max-h-full max-w-[550px] 2xl:max-w-[650px]"
      src={nandoAssets.MockupCaresync3}
      alt="Caresync mockup"
      priority
      placeholder="blur"
      width={1920}
      height={1080}
    />
  </NandoSideImage>
);

const Work3Learning = () => {
  return (
    <NandoLayout
      sideComponent={SideComponent}
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work3Design,
        hrefNext: routes.work4,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <Text tag="h1" variant="heading">
            Looking back...
          </Text>
          <Text variant="heading3">What did I learn?</Text>
          <ul className="list-outside list-disc pl-9 text-2xl">
            <li>
              <Text>
                <b>Visual communication works better (show, don’t tell)</b>.
                Meeting with stakeholders, they claimed to understand my
                proposals, but didn’t fully grasp them until I put clickable
                prototypes in their hands, which cleared most of their doubts.
                From that moment on,{" "}
                <b>I decided to show more than what I explained with words</b>.
              </Text>
            </li>
          </ul>
          <Text variant="heading3">What did we achieve?</Text>
          <ul className="list-outside list-disc pl-9 text-2xl">
            <li>
              <Text>
                <b>Improved communication between design and development</b>. In
                past projects, the development team had trouble locating and
                understanding designs. I interviewed several developers and
                identified they commonly used Figma pages to locate flows, so I
                decided to leverage this and organized the file around their pre
                existing intuitions. The new file structure was an immediate
                help for all developers involved,{" "}
                <b>considerably speeding up their work</b>.
              </Text>
            </li>
            <br />
            <li>
              <Text>
                <b>Established a previously non existing solid design base</b>.
                This allowed us swiftly propose and design new features.
              </Text>
            </li>
          </ul>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work3Learning;
