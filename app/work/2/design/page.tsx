import { routes } from "@/app/_routes/routes";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";
import { ReactNode } from "react";

const Work2Design = () => {
  const SideComponent: ReactNode = (
    <NandoSideImage>
      <Image
        className="max-h-full max-w-[600px] object-contain"
        src={nandoAssets.MockupJoynup2}
        alt="joynup mockup 2"
        priority
        placeholder="blur"
        width={1920}
        height={1080}
      />
    </NandoSideImage>
  );

  return (
    <NandoLayout
      sideComponent={SideComponent}
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work2,
        hrefNext: routes.work2Learning,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <Text tag="h1" variant="heading">
            Going for a minimalistic approach.
          </Text>
          <Text>
            The UI was designed with the values of fairness, transparency and
            positivity in mind. It had to transmit the right balance between the
            sobriety of a legal procedure and the fun nature of a romantic
            relationship.
          </Text>
          <Text tag="h3" variant="heading3">
            Challenges
          </Text>
          <ul className="list-outside list-disc pl-9 text-2xl">
            <li>
              <Text>
                <b>The UI had to be iterated on several times</b>, including a
                font change and the simplification of some flows. The
                registration flow, for example, was originally much longer, but
                user testing made us realize it had to be much more swift to
                attract more potential customers.
              </Text>
            </li>
            <br />
            <li>
              <Text>
                <b>
                  The original vision for the product had to be significantly
                  trimmed
                </b>{" "}
                when budget became a concern. Together with the development
                team, we were able to bring it down to the most essential
                elements.
              </Text>
            </li>
          </ul>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work2Design;
