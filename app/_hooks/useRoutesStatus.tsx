import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNandoStore } from "../_store/nandoStore";

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
  const prevRoute = useNandoStore((state) => state.prevRoute);

  const prevRouteIndex = routesOrder.indexOf(prevRoute);
  const currentRouteIndex = routesOrder.indexOf(pathname);

  const isGoingBack = prevRouteIndex > currentRouteIndex;
  const isStatic = prevRouteIndex === currentRouteIndex || prevRoute === "";

  useEffect(() => {
    useNandoStore.setState({ prevRoute: pathname });
  }, [pathname]);
  return {
    isGoingBack,
    isStatic,
    prevRoute,
  };
};

export default useRoutesStatus;
