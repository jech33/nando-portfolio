import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useRoutesStatus = () => {
  const routesOrder = [
    "/",
    "/about",
    "/work",
    "/work/1",
    "/work/2",
    "/work/3",
    "/work/4",
  ];
  const pathname = usePathname();
  const prevRoute =
    typeof sessionStorage !== "undefined"
      ? sessionStorage.getItem("prevRoute") || ""
      : "";

  const prevRouteIndex = routesOrder.indexOf(prevRoute);
  const currentRouteIndex = routesOrder.indexOf(pathname);

  const isGoingBack = prevRouteIndex > currentRouteIndex;
  const isStatic = prevRouteIndex === currentRouteIndex || prevRoute === "";

  useEffect(() => {
    sessionStorage.setItem("prevRoute", pathname);
  }, [pathname]);
  return {
    isGoingBack,
    isStatic,
    prevRoute,
  };
};

export default useRoutesStatus;
