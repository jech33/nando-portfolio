export const routesOrder = [
  "/",
  "/about",
  "/work",
  "/work/1",
  "/work/1/design",
  "/work/1/learning",
  "/work/2",
  "/work/2/design",
  "/work/2/learning",
  "/work/3",
  "/work/3/design",
  "/work/3/learning",
  "/work/4",
  "/work/4/design",
  "/work/4/learning",
  "/work/5",
  "/work/5/design1",
  "/work/5/design2",
  "/work/5/learning",
  "/contact",
];

export const routes = {
  home: "/",
  about: "/about",
  work: "/work",
  work1: "/work/1",
  work1Design: "/work/1/design",
  work1Learning: "/work/1/learning",
  work2: "/work/2",
  work2Design: "/work/2/design",
  work2Learning: "/work/2/learning",
  work3: "/work/3",
  work3Design: "/work/3/design",
  work3Learning: "/work/3/learning",
  work4: "/work/4",
  work4Design: "/work/4/design",
  work4Learning: "/work/4/learning",
  work5: "/work/5",
  work5Design1: "/work/5/design1",
  work5Design2: "/work/5/design2",
  work5Learning: "/work/5/learning",
  contact: "/contact",
};

export const workMainRoutes = {
  index: {
    label: "Index",
    path: routes.work,
    index: routesOrder.indexOf(routes.work),
  },
  work1: {
    label: "millave",
    path: routes.work1,
    index: routesOrder.indexOf(routes.work1),
  },
  work2: {
    label: "Joynup",
    path: routes.work2,
    index: routesOrder.indexOf(routes.work2),
  },
  work3: {
    label: "CareSync",
    path: routes.work3,
    index: routesOrder.indexOf(routes.work3),
  },
  work4: {
    label: "SwiftRide",
    path: routes.work4,
    index: routesOrder.indexOf(routes.work4),
  },
  // work5: {
  //   label: "Luna",
  //   path: routes.work5,
  //   index: routesOrder.indexOf(routes.work5),
  // },
};

export const workMainRoutesMap: {
  label: string;
  path: string;
  index: number;
}[] = Object.values(workMainRoutes);
