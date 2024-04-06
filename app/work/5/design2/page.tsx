import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_ui/_utils/nandoAssets";

const Work5Design2 = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage
          src={nandoAssets.MockupLuna3}
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
        hrefBack: routes.work5Design1,
        hrefNext: routes.work5Learning,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <Text tag="h1" variant="heading">
            Challenge # 2: Internal communications
          </Text>
          <Text>
            The main challenge I noticed was that{" "}
            <b>design initiatives were taking too long to get approved</b>,
            usually going through plenty of back and forth and
            misunderstandings. This stalled progress on other efforts and
            delayed quarter goals.
          </Text>
          <Text tag="h3" variant="heading3">
            The solution: Showing instead of telling
          </Text>
          <Text>
            I noticed initiatives were usually presented in seemingly huge flows
            of different screens. While this worked for development,{" "}
            <b>stakeholders struggled</b> to understand the essence of
            proposals.
          </Text>
          <Text>
            <b>I decided to do a little experiment</b>: I started recording
            myself going through the flows themselves, using prototyped versions
            of the screens to make them feel as real as possible. Along the way,
            <b>I explained my process and key decisions</b>.
          </Text>
          <Text>
            The result was better than expected:{" "}
            <b>communication improved tremendously</b>, and initiatives that
            previously took two weeks to get approved suddenly took a couple of
            days, even a couple of hours in some cases.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work5Design2;
