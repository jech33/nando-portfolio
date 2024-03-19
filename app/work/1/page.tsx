import NandoLayout from "@/app/_ui/layout/NandoLayout";
import React from "react";

const Work1 = () => {
  return (
    <NandoLayout
      images={[]}
      navProps={{
        hasArrowNavigation: true,
        hasNavbar: true,
        hrefBack: "/work",
        hrefNext: "/work/1/design",
      }}
    >
      Work1
    </NandoLayout>
  );
};

export default Work1;
