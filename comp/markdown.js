import MDX from "@mdx-js/runtime"
import CodeBlock from "./ui/CodeBlock"
import { Box, Text, Heading } from "theme-ui"
import {A} from './base'
import Demo from "../demo";
const _components = {
  Demo,
  Box: (props) => <Box {...props} />,
  // pre: (props) => <div {...props} />,
  code: CodeBlock,
  a:A,
}

export default function MarkdownView({components,children}){
  return (<>
    <MDX components={{..._components,...components}}>{children}</MDX>
  </>)
}
export const components = _components