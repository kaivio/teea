// pages/note/$slug.js
import Post,{data} from './$slug.md'
import Layout from "/comp/layout"
import {A} from '/comp/base'
import * as lib from '/lib'
import { Box } from "@theme-ui/components"
import { components } from "/comp/markdown";

export default function $comp(props){
  return (<Layout title={data.title}>
    <h1>{data.title}</h1>
    <Box py={4}>
    <Post components={{ 
      ...components,
      Demo,
    }} />
    </Box>
  </Layout>)
}

export async function getStaticProps(){
  let props = { }

  return { props }
}

function Demo(props) {
  return (<>
    <Box>
      {props.children||'Hello, world!'}
    </Box>
  </>)
}
