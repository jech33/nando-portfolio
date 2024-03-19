import { nandoIconsAssets, nandoImages } from "../_utils/nandoAssets";
import NandoLayout from "../_ui/layout/NandoLayout";
import Text from "../_ui/core/Text";
import Link from "../_ui/core/Link";
import Image from "next/image";
import { routes } from "../_routes/routes";
import NandoLayoutArticle from "../_ui/layout/NandoLayoutArticle";

export default function About() {
  return (
    <NandoLayout
      images={nandoImages.about}
      navProps={{
        hasArrowNavigation: true,
        hrefBack: routes.home,
        hrefNext: routes.work,
      }}
    >
      <NandoLayoutArticle>
        <div className="flex flex-col gap-6 h-full pb-16 overflow-y-scroll no-scrollbar">
          <Text variant="heading">About Me</Text>
          <Text>
            Hello! 👋 I&apos;m Hernando Saieh. I currently work as a mid-level
            product designer at{" "}
            <Link target="_blank" href={"https://www.koombea.com/"}>
              Koombea
            </Link>
            .
          </Text>
          <Text>
            As per my multipotentialite nature, I{" "}
            <b>majored in Communication</b> and began working as a{" "}
            <b>filmmaker</b>, where I learned about the art of captivating and
            telling stories through images.
          </Text>
          <Text>
            On this storytelling journey, I began to become quite interested in
            those who consumed stories: how they thought, what determined their
            tastes.{" "}
            <b>
              Yearning to understand more about the audience and how to help
              them
            </b>{" "}
            naturally led me to learn about and fall in love with user-centered
            (UX) design.
          </Text>
          <Text>
            Today, my purpose is to use design, storytelling and any creative
            means in order to <b>serve others</b>.
          </Text>
          <Text>
            I also like <b>creating music with my guitar</b>, the original
            storyteller’s instrument, and <b>writing short articles</b> in my
            free time. You can find me on{" "}
            <Link target="_blank" href="https://youtube.com/@nandosadi">
              Youtube
            </Link>
            ,{" "}
            <Link
              target="_blank"
              href="https://open.spotify.com/artist/00pztyKZ2dAmLYuZ1BsDFY?si=TuW8ObNwRm-84cD_qtyOgA"
            >
              Spotify
            </Link>{" "}
            and on{" "}
            <Link
              target="_blank"
              href="https://open.spotify.com/artist/00pztyKZ2dAmLYuZ1BsDFY?si=TuW8ObNwRm-84cD_qtyOgA"
            >
              my blog
            </Link>
            .
          </Text>
        </div>
        <div className="tooltip-container flex gap-4 absolute bottom-6 right-16">
          <Text variant="tooltip" className="max-w-[20.1875rem]">
            Use the arrows to the right to navigate this portfolio
          </Text>
          <Image
            className="relative -top-12"
            src={nandoIconsAssets.CurvedLineDoodle}
            alt={"curved-line-doodle.svg"}
          />
        </div>
      </NandoLayoutArticle>
    </NandoLayout>
  );
}
