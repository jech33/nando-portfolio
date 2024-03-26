import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/dssdff/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";
import { ReactNode } from "react";

const SideComponent: ReactNode = (
  <div className="flex h-full w-full flex-col items-start gap-8 overflow-hidden px-[4rem] pt-20">
    <div className="flex items-start gap-8">
      <figure className="flex flex-col items-start gap-4">
        <Text tag="figcaption" variant="caption">
          Original Design
        </Text>
        <Image
          src={nandoAssets.MockupCaresync2}
          alt="Caresync mockup 2"
          priority
          placeholder="blur"
        />
      </figure>
      <figure className="flex flex-col items-start gap-4">
        <Text tag="figcaption" variant="caption">
          Simplified Design
        </Text>
        <Image
          src={nandoAssets.MockupCaresync3}
          alt="Caresync mockup 3"
          priority
          placeholder="blur"
        />
      </figure>
    </div>
    <figure className="flex flex-col items-start gap-4">
      <Text tag="figcaption" variant="caption">
        Availability rule variant examples{" "}
      </Text>
      <Image
        src={nandoAssets.MockupCaresync4}
        alt="Caresync mockup 4"
        priority
        placeholder="blur"
      />
    </figure>
  </div>
);

const Work3Design = () => {
  return (
    <NandoLayout
      sideComponent={SideComponent}
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work3,
        hrefNext: routes.work3Learning,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <Text tag="h1" variant="heading">
            Adapting designs to each specific user.
          </Text>
          <Text>
            There were two main user types: <b>doctors and clinic users</b>.
            <br />
            <br />
            The focus of the feature changed depending on the user:
          </Text>
          <ul className="list-outside list-disc pl-9 text-2xl">
            <li>
              <Text>
                For <b>doctors</b>, the main requirement was setting up their
                availability rules, which is why I prioritized data
                visualization of their appointments through the calendar itself.
              </Text>
            </li>
            <br />
            <li>
              <Text>
                For <b>clinic users</b>, appointment management was the core of
                their tasks, which lead me to design their screens as tables
                with quick access actions.
              </Text>
            </li>
          </ul>
          <Text tag="h3" variant="heading3">
            Customizing the Design System
          </Text>
          <Text>
            Given how complex the availability rules for doctors were, I
            designed them as <b>custom variants inside the Design System</b>,
            which allowed me to edit them quickly when stakeholder feedback
            arrived.{" "}
          </Text>
          <Text>
            This took work that could potentially last several days and{" "}
            <b>reduced it to a matter of hours, even minutes</b>.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work3Design;
