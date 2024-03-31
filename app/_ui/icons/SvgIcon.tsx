import React from "react";
import { twMerge } from "tailwind-merge";

export type SvgIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const SvgIcon = (props: SvgIconProps) => {
  const { children, className, size = 24, ...other } = props;
  const childrenTyped = children as React.ReactElement;
  const { viewBox } = childrenTyped.props;
  const sizeClass = `min-w-[${size}px] min-h-[${size}px]`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={viewBox || "0 0 24 24"}
      width={size}
      height={size}
      className={twMerge(sizeClass, className)}
      {...other}
    >
      {childrenTyped.props.children}
    </svg>
  );
};

export default SvgIcon;
