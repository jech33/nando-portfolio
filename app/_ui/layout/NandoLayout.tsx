"use client";
import Image from "next/image";
import Link from "next/link";
import { nandoAssets } from "../../_utils/nandoAssets";
import useNandoAnimations from "../../_hooks/useNandoAnimations";
import NandoLayoutSidePanel, {
  NandoLayoutSidePanelProps,
} from "./NandoLayoutSidePanel";
import Navbar, { NavbarProps } from "../core/Navbar";

type NandoLayoutProps = Readonly<
  {
    children: React.ReactNode;
    navProps?: NavbarProps & {
      hasNavbar?: boolean;
    };
  } & NandoLayoutSidePanelProps
>;

const NandoLayout = ({
  children,
  navProps = {
    hasNavbar: false,
    hasArrowNavigation: false,
  },
  images,
  sideComponent,
}: NandoLayoutProps) => {
  const { setExitAnimationRight } = useNandoAnimations();
  return (
    <div className="flex min-h-full w-full bg-background shadow-2xl [&_b]:font-semibold">
      <Image
        className="absolute left-0 top-9"
        src={nandoAssets.LineDoodle}
        alt="line-doodle"
      />
      <article className="relative flex h-full w-1/2 flex-col items-center justify-center shadow-lg">
        {children}
        <Navbar {...navProps} />
      </article>
      <div className="relative flex h-full w-1/2 flex-col items-stretch justify-stretch overflow-hidden bg-white">
        {images && <NandoLayoutSidePanel images={images} />}
        {sideComponent && (
          <NandoLayoutSidePanel sideComponent={sideComponent} />
        )}
        <Link
          href="/"
          className="absolute bottom-4 right-4"
          onClick={() => {
            setExitAnimationRight();
          }}
        >
          <Image
            src={"/assets/logo.svg"}
            height={52}
            width={52}
            alt="nandologia-logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default NandoLayout;
