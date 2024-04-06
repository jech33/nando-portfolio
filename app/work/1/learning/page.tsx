import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_ui/_utils/nandoAssets";

const Work1 = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage
          src={nandoAssets.MockupMillave4}
          alt="millave"
          priority
          placeholder="blur"
          width={1920}
          height={1080}
        />
      }
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work1Design,
        hrefNext: routes.work2,
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
                <b>Less is more.</b> Upon researching similar apps, I found that
                decluttering the UI as much as possible made the information
                easy to read and the features quick to process.
              </Text>
            </li>
            <br />
            <li>
              <Text>
                <b>Less is a bore.</b> Conversely, having minimalism as a basis
                for design is a good starting point, but there’s plenty of ways
                to add empathy to a design that don’t involve a simplistic
                approach. Illustrations, for example, turned out to be a great
                way to add character to the UI.
              </Text>
            </li>
          </ul>
          <Text variant="heading3">What did we achieve?</Text>
          <ul className="list-outside list-disc pl-9 text-2xl">
            <li>
              <Text>
                <b>Made my first project in UX design.</b> This, along with a
                successful round of interviews, landed me my first product
                design job.
              </Text>
            </li>
          </ul>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work1;
