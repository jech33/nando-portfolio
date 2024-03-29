"use client";
import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import SideComponent from "./SideComponent";

const Work1 = () => {
  return (
    <NandoLayout
      sideComponent={<SideComponent />}
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work1,
        hrefNext: routes.work1Learning,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
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
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work1;
