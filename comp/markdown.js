import MDX from "@mdx-js/runtime"
import CodeBlock from "./ui/CodeBlock"
import { Box, Text, Heading } from "theme-ui"
import {A} from './base'
const components = {
  Box: (props) => <Box {...props} />,
  // pre: (props) => <div {...props} />,
  code: CodeBlock,
  a:A,
}

export default function MarkdownView({children}){
  return (<>
    <MDX components={components}>{children}</MDX>
  </>)
}