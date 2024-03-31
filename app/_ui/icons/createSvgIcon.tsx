import * as React from "react";
import SvgIcon, { SvgIconProps } from "./SvgIcon";

export default function createSvgIcon(path: React.ReactNode) {
  const Component = (props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => {
    return (
      <SvgIcon ref={ref} {...props}>
        {path}
      </SvgIcon>
    );
  };

  return React.forwardRef(Component);
}
