import { routes } from "@/app/_routes/routes";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";
import { ReactNode } from "react";

const Work1 = () => {
  const SideComponent: ReactNode = (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 overflow-hidden">
      <div className="flex flex-col items-center gap-6">
        <Text variant="caption">
          Desktop Screens.{" "}
          <Link
            className="font-medium"
            target="_blank"
            href="https://xd.adobe.com/view/03f4b84c-44c9-404f-97dc-a54a6ac97f2f-56a7/?fullscreen&hints=off"
          >
            View Prototype
          </Link>
        </Text>
        <Image
          src={nandoAssets.MockupMillave2}
          alt="millave mockup 2"
          priority
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <Text variant="caption">
          Mobile Screens.{" "}
          <Link
            className="font-medium"
            target="_blank"
            href="https://xd.adobe.com/view/34a12fe4-0f3b-4225-aeb9-09c7a0f4baf1-61f2/screen/b16a557a-e754-455a-88c7-4741d0578672?fullscreen&hints=off"
          >
            View Prototype
          </Link>
        </Text>
        <Image
          src={nandoAssets.MockupMillave3}
          alt="millave mockup 2"
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
        hrefBack: routes.work1,
        hrefNext: routes.work1Learning,
      }}
    >
      <NandoLayoutArticle>
        <div className="flex h-full flex-col items-start gap-6">
          <Text tag="h1" variant="heading">
            Building out the design...
          </Text>
          <Text>
            I went through a <b>benchmarking process</b> with the most popular
            roommate search apps in Latin America in order to determine what
            features the app should have.
          </Text>
          <Text>
            I built <b>user personas</b> to determine which user profiles would
            use the app and how to design it around their needs.
          </Text>
          <Text>
            The chosen visual style was based on <b>minimalism</b> and the need
            to convey <b>peace and calm</b> to the user.
          </Text>
          <Text>
            I performed <b>4 user testing sessions</b> with Colombian students
            whose needs aligned with wanting to find a roommate in another
            place.
          </Text>
          <ul className="list-outside list-disc pl-9 text-2xl">
            <li>
              <Text>
                <b>Improved readability</b> by increasing the size of certain
                texts.
              </Text>
            </li>
            <li>
              <Text>
                <b>Expanded the initial questionnaire</b> by adding fields to
                input location and budget.
              </Text>
            </li>
            <li>
              <Text>
                <b>Strengthened the roommate search feature</b> by adding data
                for hobbies and occupation.
              </Text>
            </li>
            <li>
              <Text>
                <b>Empowered the user</b> by adding an option to upload photos
                of their living spaces.
              </Text>
            </li>
          </ul>
        </div>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work1;
