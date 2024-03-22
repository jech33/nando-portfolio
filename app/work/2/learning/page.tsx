import { routes } from "@/app/_routes/routes";
import Link from "@/app/_ui/core/Link";
import Text from "@/app/_ui/core/Text";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const Work2Learning = () => {
  return (
    <NandoLayout
      sideComponent={
        <div className="flex h-full w-full items-center justify-center overflow-hidden px-[8.25rem]">
          <Image
            src={nandoAssets.MockupJoynup4}
            alt="joynup mockup"
            priority
            placeholder="blur"
          />
        </div>
      }
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work2Design,
        hrefNext: routes.work3,
      }}
    >
      <NandoLayoutArticle>
        <div className="flex h-full flex-col items-start gap-6">
          <Text tag="h1" variant="heading">
            Looking back...
          </Text>
          <Text variant="heading3">What did I learn?</Text>
          <ul className="list-outside list-disc pl-9 text-2xl">
            <li>
              <Text>
                <b>User input is essential</b>. It might seem obvious, but being
                in a project where an essential flow was improved directly
                because of user input makes this pearl of wisdom all the more
                relevant.
              </Text>
            </li>
            <br />
            <li>
              <Text>
                <b>
                  Project need a healthy balance between client and designer
                  input
                </b>
                . It’s not about ignoring what the client asks for, but it’s not
                about blindly following their every word either. The designer
                should also guide the client in their journey towards the best
                possible product.
              </Text>
            </li>
          </ul>
          <Text variant="heading3">What did we achieve?</Text>
          <ul className="list-outside list-disc pl-9 text-2xl">
            <li>
              <Text>
                <b>Designed a web platform from scratch</b> for an innovative
                idea that is{" "}
                <Link
                  className="font-normal"
                  target="_blank"
                  href="https://joynup.com/"
                >
                  still working today.
                </Link>
              </Text>
            </li>
            <li>
              <Text>
                <b>Built a UI design</b> that was{" "}
                <Link
                  className="font-normal"
                  target="_blank"
                  href="https://www.indigoaward.com/winners/5493"
                >
                  recognized by the Indigo Design Awards
                </Link>{" "}
                in the <b>Website Design and UX, Interface & Navigation</b>{" "}
                categories.
              </Text>
            </li>
          </ul>
        </div>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work2Learning;
