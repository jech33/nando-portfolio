import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const Work4Design = () => {
  return (
    <NandoLayout
      sideComponent={
        <div className="flex h-full w-full items-center justify-center overflow-hidden px-4">
          <Image
            className="w-full"
            src={nandoAssets.MockupSwiftride2}
            alt="swiftride mockup"
            priority
          />
        </div>
      }
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work4,
        hrefNext: routes.work4Learning,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <Text tag="h1" variant="heading">
            Organizing screens into logical flows.
          </Text>
          <Text>
            I designed screens to show the different possible user flows.
            Alternate screens, like <b>error states</b>, were also included for
            developers.
            <br />
            <br />
            You can see an example of how flows were shown to the right, with
            <b>branching paths and different states</b>.
          </Text>
          <Text tag="h3" variant="heading3">
            Bringing the team together
          </Text>
          <Text>
            When receiving this project, I discovered{" "}
            <b>hundreds of Figma files</b>
            spread across myriads of teams without a clear structure.
          </Text>
          <Text>
            With the main goals of alleviating this and bringing teams back
            together, I decided to{" "}
            <b>create a single file that acted as a source of truth</b>,
            organizing it in the clearest way possible so teams could quickly
            identify designs relevant to their tasks.
          </Text>
          <Text>
            I also built a <b>Design System</b> that kept all platforms
            consistent and scalable.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work4Design;
