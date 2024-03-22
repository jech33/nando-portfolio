import { routes } from "@/app/_routes/routes";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const SideComponent = (
  <figure className="flex h-full w-full flex-col items-start justify-center gap-4 overflow-hidden px-[8.25rem]">
    <Text tag="figcaption" variant="caption" className="px-4">
      Figma File Structure
    </Text>
    <Image
      src={nandoAssets.MockupCaresync5}
      alt="Caresync mockup"
      priority
      placeholder="blur"
    />
  </figure>
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
        <div className="flex h-full flex-col items-start gap-6">
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
        </div>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work3Learning;
