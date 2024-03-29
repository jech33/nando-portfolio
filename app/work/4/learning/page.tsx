import { routes } from "@/app/_routes/routes";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import UnorderedList from "@/app/_ui/core/UnorderedList";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_utils/nandoAssets";

const Work4Learning = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage
          className="max-h-full max-w-[650px] object-contain"
          src={nandoAssets.MockupSwiftride3}
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
        hrefBack: routes.work4Design,
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
                <b>Organization is key</b>. It is tempting to think design ends
                when screens are handed off to developers, but it is even more
                important to have a clear file structure that is in sync with
                developers’ expectations.
              </Text>
            </li>
            <br />
            <li>
              <Text>
                <b>Constant communication between team members is necessary</b>.
                Even if there are hand off meeting, a designer should maintain
                constant contact with the development team to ensure all the
                proposed solutions are being built properly.
              </Text>
            </li>
          </UnorderedList>
          <Text variant="heading3">What did we achieve?</Text>
          <UnorderedList>
            <li>
              <Text>
                <b>Modernized the visual style of the product</b>, which was
                using an outdated version of Material Design, to abide by the{" "}
                <Link
                  className="font-medium"
                  href="https://lawsofux.com/aesthetic-usability-effect/"
                  target="_blank"
                >
                  aesthetic-usability effect.
                </Link>
              </Text>
            </li>
            <br />
            <li>
              <Text>
                <b>Simplified several of the existing flows</b>. For instance,
                the main flow to request transport went from occupying 4 screens
                to occupying only 2, making better use of real estate and
                reducing cognitive load.
              </Text>
            </li>
          </UnorderedList>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work4Learning;
