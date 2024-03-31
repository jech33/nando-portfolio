"use client";
import useRoutesStatus from "@/app/_hooks/useRoutesStatus";
import { routes, routesOrder } from "@/app/_routes/routes";
import Link from "next/link";
import BackIcon from "../icons/BackIcon";
import useNandoAnimations from "@/app/_hooks/useNandoAnimations";

const Navbar = () => {
  const { pathname, currentRouteIndex } = useRoutesStatus();
  const { setExitAnimationRight, setExitAnimationStatic } =
    useNandoAnimations();
  const navBarRoutes = {
    index: {
      name: "Index",
      path: routes.work,
      index: routesOrder.indexOf(routes.work),
    },
    work1: {
      name: "millave",
      path: routes.work1,
      index: routesOrder.indexOf(routes.work1),
    },
    work2: {
      name: "Joynup",
      path: routes.work2,
      index: routesOrder.indexOf(routes.work2),
    },
    work3: {
      name: "CareSync",
      path: routes.work3,
      index: routesOrder.indexOf(routes.work3),
    },
    work4: {
      name: "SwiftRide",
      path: routes.work4,
      index: routesOrder.indexOf(routes.work4),
    },
  };

  return (
    <nav className="absolute bottom-[1.875rem] left-[4.875rem]">
      <ul className="flex gap-2">
        {Object.values(navBarRoutes).map((route) => {
          const isCurrentRoute =
            pathname.split("/")[2] === route.path.split("/")[2];
          return (
            <li
              key={route.name}
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
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
