// pages/$slug.js
import * as Post from "./hello.md"
import Layout from "/comp/layout"
import { A, MDX } from '/comp/base'
import * as lib from '/lib'
import { Box } from "@theme-ui/components"
import { components } from "/comp/markdon";

export default function $comp(props){
  return (<Layout title="$title">
    <Post.default components={{ 
      ...components,
    }} />
  </Layout>)
}

export async function getStaticProps(){
  let props = { }

  return { props }
}
