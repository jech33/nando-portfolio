import type { MDXComponents } from "mdx/types";
import Text from "./app/_ui/core/Text";
import UnorderedList from "./app/_ui/core/UnorderedList";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <Text tag="h1" variant="heading">
        {props.children}
      </Text>
    ),
    h2: (props) => (
      <Text tag="h2" variant="heading3">
        {props.children}
      </Text>
    ),
    p: (props) => <Text>{props.children}</Text>,
    ul: (props) => <UnorderedList>{props.children}</UnorderedList>,
    Image: (props: React.ComponentProps<typeof Image>) => (
      <Image {...props} alt={props.alt} />
    ),
    ...components,
  };
}
