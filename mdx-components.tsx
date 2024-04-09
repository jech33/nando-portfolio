import type { MDXComponents } from "mdx/types";
import Text from "./app/_ui/core/Text";
import UnorderedList from "./app/_ui/core/UnorderedList";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <Text tag="h1" variant="heading">
        {props.children}
      </Text>
    ),
    p: (props) => <Text>{props.children}</Text>,
    ul: (props) => <UnorderedList>{props.children}</UnorderedList>,
    ...components,
  };
}
