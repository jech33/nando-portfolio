import { routes } from "@/app/_routes/routes";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";
import { ReactNode } from "react";

const Work2Design = () => {
  const SideComponent: ReactNode = (
    <div className="flex h-full w-full items-start justify-center gap-16 overflow-hidden px-[8.25rem] pt-20">
      <div className="flex flex-col items-center gap-6">
        <Text variant="caption">Original Design</Text>
        <Image
          src={nandoAssets.MockupJoynup2}
          alt="joynup mockup 2"
          priority
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Text variant="caption">Simplified Design</Text>
        <Image
          src={nandoAssets.MockupJoynup3}
          alt="joynup mockup 2"
          priority
          placeholder="blur"
        />
      </div>
    </div>
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
        <div className="flex h-full flex-col items-start gap-6">
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
        </div>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work2Design;
