"use client";
import useRoutesStatus from "@/app/_hooks/useRoutesStatus";
import { routes, routesOrder, workMainRoutesMap } from "@/app/_routes/routes";
import Link from "next/link";
import BackIcon from "../icons/BackIcon";
import useNandoAnimations from "@/app/_hooks/useNandoAnimations";
import ArrowNavigation from "./ArrowNavigation";

export type NavbarProps = {
  hasArrowNavigation: boolean;
  hasNavbar?: boolean;
  hrefNext?: string;
  hrefBack?: string;
};

const Navbar = (props: NavbarProps) => {
  const { hasNavbar, hasArrowNavigation, hrefBack, hrefNext } = props;
  const { pathname, currentRouteIndex } = useRoutesStatus();
  const { setExitAnimationRight, setExitAnimationStatic } =
    useNandoAnimations();

  return (
    <nav className="absolute bottom-[1.875rem] flex w-full items-center justify-between pl-10 pr-6">
      {hasNavbar && (
        <ul className="mb-2 flex gap-2">
          {Object.values(workMainRoutesMap).map((route) => {
            const isCurrentRoute =
              pathname.split("/")[2] === route.path.split("/")[2];
            return (
              <li
                key={route.path}
                className="group flex flex-col items-center justify-between px-[.6875rem] pt-[.625rem] transition-all hover:text-primary"
              >
                {route.path === routes.work && (
                  <BackIcon
                    className={`transition-all group-hover:[&_path]:fill-primary ${isCurrentRoute ? "[&_path]:fill-primary" : ""}`}
                  />
                )}
                {route.path !== routes.work && (
                  <div
                    className={`h-[.375rem] w-[.375rem] rounded-full transition-all ${isCurrentRoute ? "bg-primary" : ""}`}
                  />
                )}
                <Link
                  href={route.path}
                  className={isCurrentRoute ? "font-bold text-primary" : ""}
                  onClick={() => {
                    route.index < currentRouteIndex
                      ? setExitAnimationRight()
                      : setExitAnimationStatic();
                  }}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {hasArrowNavigation && (
        <ArrowNavigation hrefNext={hrefNext} hrefBack={hrefBack} />
      )}
    </nav>
  );
};

export default Navbar;
