import MDX from "@mdx-js/runtime"
import CodeBlock from "./ui/CodeBlock"
import { Box, Text, Heading } from "theme-ui"

const components = {
  Box: (props) => <Box {...props} />,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

export default function MarkdownView({children}){
  return (<>
    <MDX components={components}>{children}</MDX>
  </>)
}