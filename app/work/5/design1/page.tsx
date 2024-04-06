import { routes } from "@/app/_routes/routes";
import OrderedList from "@/app/_ui/core/OrderedList";
import Text from "@/app/_ui/core/Text";
import UnorderedList from "@/app/_ui/core/UnorderedList";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_ui/_utils/nandoAssets";

const Work5Design = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage
          src={nandoAssets.MockupLuna2}
          alt="luna mockup"
          priority
          placeholder="blur"
          width={1920}
          height={1080}
        />
      }
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work5,
        hrefNext: routes.work5Design2,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <Text tag="h1" variant="heading">
            Challenge # 1: File structure
          </Text>
          <Text>
            The first challenge I noticed was that the way designs were being
            structured and stored was inadvertently{" "}
            <b>contributing to confusion</b>. Everything was being saved into a
            single master file, which made it really difficult to track what was
            in the actual app vs. what was being worked on.
          </Text>
          <Text tag="h3" variant="heading3">
            The solution: Split it up
          </Text>
          <Text>
            Although the master file approach had worked in other projects, it
            was clear <b>this project has unique requirements</b>, so it needed
            something different.
          </Text>
          <Text>
            My solution was to <b>split designs into a multi-file structure</b>:
          </Text>
          <UnorderedList>
            <li>
              one folder would store up to date designs that reflected the
              current state of the app
            </li>
            <li>another folder would contain initiatives being worked on</li>
          </UnorderedList>
          <Text>
            These would be color coded for easier scanning, and designs would be
            updated based on mobile releases.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work5Design;
