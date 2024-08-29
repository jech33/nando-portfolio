import { routes } from "@/app/_routes/routes";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import UnorderedList from "@/app/_ui/core/UnorderedList";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_utils/nandoAssets";

const Work5Learning = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage
          src={nandoAssets.MockupLuna4}
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
        hrefBack: routes.work5Design2,
        hrefNext: routes.contact,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <Text tag="h1" variant="heading">
            Looking back...
          </Text>
          <Text variant="heading3">What did I learn?</Text>
          <UnorderedList>
            <li>
              <Text>
                <b>There’s no one-size-fits-all solution</b>. The single master
                file approach had worked in past projects, but was ill fitted
                for this one. Adapting was necessary.
              </Text>
            </li>
            <br />
            <li>
              <Text>
                <b>Experimenting can pay off when done correctly</b>. Instead of
                trying to do what I had done in other projects, I ventured to
                think outside the box and propose different ways of presenting
                initiatives, which benefited the project in the long run.
              </Text>
            </li>
          </UnorderedList>
          <Text variant="heading3">What did we achieve?</Text>
          <UnorderedList>
            <li>
              <Text>
                <b>Minimized confusion in the file structure</b>. Proposals and
                designs in general became much more easily searchable,
                contributing to the improvement of all team members´ workflows.
              </Text>
            </li>
            <br />
            <li>
              <Text>
                <b>Increased efficiency in internal development process</b>.
                Initiatives went from taking several weeks for approval to
                taking a few days.
              </Text>
            </li>
          </UnorderedList>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work5Learning;
