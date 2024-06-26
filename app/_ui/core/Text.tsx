import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/_utils/utils";

// Customized button variations
const textVariants = cva(`text-lg 2xl:text-2xl`, {
  variants: {
    variant: {
      heading: "font-heading text-[2.125rem] 2xl:text-[2.625rem] font-medium",
      heading2: "font-heading text-[1.75rem] 2xl:text-[2.25rem] font-medium",
      heading3: "font-heading text-[1.375rem] 2xl:text-[1.875rem] font-medium",
      subheading: "font-secondary text-[3rem] 2xl:text-[4rem] text-primary",
      body1: "text-lg 2xl:text-2xl leading-[normal]",
      body2: "text-base 2xl:text-base leading-[normal]",
      bodyBig: "text-xl 2xl:text-3xl leading-[normal]",
      tooltip:
        "font-secondary text-primary text-[1.625rem] 2xl:text-[2.125rem]",
      link: "text-primary underline font-semibold",
      caption: "font-light text-[1rem] 2xl:text-[1.5rem] italic",
    },
    color: {
      textPrimary: "text-textPrimary",
      textSecondary: "text-primary",
    },
  },
  defaultVariants: {
    variant: "body1",
  },
});

type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "figcaption";

type TypographyProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof textVariants> & {
    tag?: TagVariants;
    children: ReactNode;
  };

const Text = ({
  color,
  variant,
  className,
  children,
  tag = "p",
  ...props
}: TypographyProps) => {
  const Component = tag;
  return (
    <Component
      className={cn(textVariants({ className, variant, color }))}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
