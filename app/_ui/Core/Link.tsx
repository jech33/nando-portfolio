import React from "react";
import NextLink from "next/link";
import Text from "./Text";

const Link = (props: React.ComponentProps<typeof NextLink>) => {
  const { children, className, ...linkProps } = props;
  return (
    <NextLink {...linkProps}>
      <Text tag="span" variant="link" className={className}>
        {children}
      </Text>
    </NextLink>
  );
};

export default Link;
