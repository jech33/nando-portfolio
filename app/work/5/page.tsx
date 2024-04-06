import { routes } from "@/app/_routes/routes";
import Pill from "@/app/_ui/core/Pill";
import PillContainer from "@/app/_ui/core/PillContainer";
import Text from "@/app/_ui/core/Text";
import NandoArticle from "@/app/_ui/layout/NandoArticle";
import NandoLayout from "@/app/_ui/layout/NandoLayout";
import NandoLayoutArticle from "@/app/_ui/layout/NandoLayoutArticle";
import NandoSideImage from "@/app/_ui/layout/NandoSideImage";
import { nandoAssets } from "@/app/_ui/_utils/nandoAssets";
import { workLabels } from "@/app/_ui/_utils/utils";
import Image from "next/image";

const Work5 = () => {
  return (
    <NandoLayout
      sideComponent={
        <NandoSideImage
          src={nandoAssets.MockupLuna1}
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
        hrefBack: routes.work4Learning,
        hrefNext: routes.work5Design1,
      }}
    >
      <NandoLayoutArticle>
        <NandoArticle>
          <div className="flex flex-col gap-8">
            <Image src={nandoAssets.LogoLuna} alt={"luna logo"} />
            <Text tag="h1" variant="heading">
              Physical therapy, delivered through your smartphone.
            </Text>
          </div>
          <PillContainer labels={workLabels.work5} />
          <Text variant="heading3">What is it?</Text>
          <Text>
            Luna is a mobile app designed to provide therapists and patients the
            independence, control, and motivation they need to feel meaningful
            relief. Therapists can manage their schedules and practice, while
            patients can receive specialized care from the comfort of their own
            homes.
          </Text>
          <Text variant="heading3">What was my role?</Text>
          <Text>
            I came as <b>product designer</b> to provide ongoing support for
            design initiatives and improvements.
          </Text>
          <Text>
            Here, I’d like to concentrate on two of the challenges I faced, and
            the solutions proposed.
          </Text>
        </NandoArticle>
      </NandoLayoutArticle>
    </NandoLayout>
  );
};

export default Work5;
