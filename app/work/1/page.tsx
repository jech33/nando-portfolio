import { routes } from "@/app/_routes/routes";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import { nandoAssets } from "@/app/_utils/nandoAssets";
import Image from "next/image";

const Work1 = () => {
  return (
    <NandoLayout
      sideComponent={
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <Image
            src={nandoAssets.MockupMillave1}
            alt="millave"
            priority
            placeholder="blur"
          />
        </div>
      }
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: routes.work,
        hrefNext: routes.work1Design,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <div className="flex flex-col gap-8">
            <Image src={nandoAssets.LogoMillave} alt={"millave logo"} />
            <Text tag="h1" variant="heading">
              Find the best, most compatible roommate.
            </Text>
          </div>
          <Text variant="heading3">What is it?</Text>
          <Text variant="body1">
            The <b>mobile app</b> millave is meant for Colombian students who
            want to move to Bogotá and want to <b>find a roommate</b> with whom
            they have compatibility. The name comes from Colombian slang; close
            friends are usually called a llave.
          </Text>
          <Text variant="heading3">What was my role?</Text>
          <Text variant="body1">
            This was my <b>final project</b> for the UX/UI Design Diploma from
            Acámica.
          </Text>
          <Text variant="body1">
            It represented my first learning experience in the world of UX. It
            involved building an app through all the steps of the design
            thinking process, <b>from ideation to prototyping</b>.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work1;
