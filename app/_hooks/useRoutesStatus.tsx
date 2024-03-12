import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNandoStore } from "../_store/nandoStore";
import { routesOrder } from "../_routes/routes";

const useRoutesStatus = () => {
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
    currentRouteIndex,
  };
};

export default useRoutesStatus;
