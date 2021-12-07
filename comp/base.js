import { Link } from "theme-ui"
import NextLink from "next/link"
import { Box, Button } from "@theme-ui/components"

import MDXRuntime from "@mdx-js/runtime"

import Container from "../comp/ui/Container"
import CodeBlock from "../comp/ui/CodeBlock"
import DraftBadge from "../comp/ui/DraftBadge"

const components = {
  Box: (props) => <Box {...props} />,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  a:A,
}

/**
 * MDX 渲染组件
 * @param {{JSX}} props 
 * @returns 
 */
export function MDX({children}) {
  return (<>
    <MDXRuntime components={components}>
      {children}
    </MDXRuntime>
  </>)
}

/**
 * 链接组件
 * @param {{URL,string,JSX}} props 
 * @returns 
 */
export function A({ href, active, children }) {
  return (
    <NextLink href={href}>
      <Link color='link' sx={{
        '&:hover': {
          textDecoration: 'underline dotted'
        }
      }}>
        {children}
      </Link>
    </NextLink>
  )
}
